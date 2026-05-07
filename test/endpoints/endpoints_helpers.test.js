

const assert = require("node:assert/strict");
const {authorizationHeaders} = require("../../src/endpoints/endpoints_helpers.js");
const constants = require("../../src/constants.js");


describe("endpoints helpers", () => {
  describe(".authorizationHeaders()", () => {
    it("should return a headers object which includes the provided 'jwtToken' in the 'authorization' field", () => {
      const jwtToken = "7A0mvzROJIucrSPYHlgd";
      const headers = authorizationHeaders({jwtToken});

      assert.deepStrictEqual(headers, {
        authorization: `Bearer ${jwtToken}`
      });
    });

    it("should return a headers object which includes the btrz-trusted cookie", () => {
      const jwtToken = "7A0mvzROJIucrSPYHlgd";
      const headers = authorizationHeaders({jwtToken, headers: {cookie: "btrz-trusted=teststuff"}});

      assert.deepStrictEqual(headers, {
        authorization: `Bearer ${jwtToken}`,
        cookie: "btrz-trusted=teststuff"
      });
    });

    it("should return a headers object which includes an auth token created using the 'internalAuthTokenProvider', when the caller " +
      "is trying to make an internal service-to-service API request", () => {
      const jwtToken = constants.INTERNAL_AUTH_TOKEN_SYMBOL;
      const internalAuthToken = "5ByXhjyKG7WBZnIL9NoL";
      const internalAuthTokenProvider = {
        getToken() {
          return internalAuthToken;
        }
      };
      const headers = authorizationHeaders({jwtToken, internalAuthTokenProvider});

      assert.deepStrictEqual(headers, {
        authorization: `Bearer ${internalAuthToken}`
      });
    });

    it("should throw an error if the caller is trying to make an internal service-to-service API request, and no " +
      "'internalAuthTokenProvider' with a 'getToken()' function is provided", () => {
      const jwtToken = constants.INTERNAL_AUTH_TOKEN_SYMBOL;

      [undefined, {}].forEach((internalAuthTokenProvider) => {
        let functionDidThrow = false;

        try {
          authorizationHeaders({jwtToken, internalAuthTokenProvider});
        } catch (err) {
          functionDidThrow = true;
          assert.ok(err.message.includes("no 'internalAuthTokenProvider' with a 'getToken' function was supplied to the API client"));
        }

        if (!functionDidThrow) {
          throw new Error("Test failed - function did not throw");
        }
      });
    });

    it("should return a headers object which includes the provided 'token' in the 'x-api-key' field", () => {
      const token = "E7excc6eXRKarIONB2gA";
      const headers = authorizationHeaders({token});

      assert.deepStrictEqual(headers, {
        "x-api-key": token
      });
    });

    describe("specifing new headers with an object", () => {
      it("should not override the provided 'token' in the 'x-api-key' field when provided in the headers object", () => {
        const token = "E7excc6eXRKarIONB2gA";
        const newHeaders = {
          "test-header": "123",
          "x-api-key": "overwritten?"
        };

        const headers = authorizationHeaders({token, headers: newHeaders});

        assert.deepStrictEqual(headers, {
          "x-api-key": token
        });
      });

      it("should add the x-amzn-trace-id passed by argument", () => {
        const newHeaders = {
          "test-header": "123",
          "x-amzn-trace-id": "25342352"
        };

        const headers = authorizationHeaders({headers: newHeaders});

        assert.deepStrictEqual(headers, {
          "x-amzn-trace-id": "25342352"
        });
      });

      it("should not add anything if headers is not an object", () => {
        const token = "E7excc6eXRKarIONB2gA";
        const headers = authorizationHeaders({token, headers: 123});

        assert.deepStrictEqual(headers, {
          "x-api-key": token
        });
      });

      it("should ignore x-amzn-trace-id if empty", () => {
        const newHeaders = {
          "test-header": "123",
          "x-amzn-trace-id": ""
        };

        const headers = authorizationHeaders({headers: newHeaders});

        assert.ok(!Object.prototype.hasOwnProperty.call(headers, "x-amzn-trace-id"));
        assert.deepStrictEqual(headers, {});
      });

      it("should add the x-elevation-token header if it is provided in the 'headers' argument", () => {
        const newHeaders = {
          "test-header": "123",
          "x-elevation-token": "ABCDEF"
        };

        const headers = authorizationHeaders({headers: newHeaders});

        assert.deepStrictEqual(headers, {
          "x-elevation-token": "ABCDEF"
        });
      });
    });
  });
});
