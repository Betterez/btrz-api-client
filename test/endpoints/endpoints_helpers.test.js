"use strict";

const {expect} = require("chai"),
  {authorizationHeaders} = require("../../src/endpoints/endpoints_helpers"),
  constants = require("../../src/constants");


describe("endpoints helpers", () => {
  describe(".authorizationHeaders()", () => {
    it("should return a headers object which includes the provided 'jwtToken' in the 'authorization' field", () => {
      const jwtToken = "7A0mvzROJIucrSPYHlgd",
        headers = authorizationHeaders({jwtToken});

      expect(headers).to.deep.equal({
        authorization: `Bearer ${jwtToken}`
      });
    });

    it("should return a headers object which includes an auth token created using the 'internalAuthTokenProvider', when the caller " +
      "is trying to make an internal service-to-service API request", () => {
      const jwtToken = constants.INTERNAL_AUTH_TOKEN_SYMBOL,
        internalAuthToken = "5ByXhjyKG7WBZnIL9NoL",
        internalAuthTokenProvider = { getToken() { return internalAuthToken; }},
        headers = authorizationHeaders({jwtToken, internalAuthTokenProvider});

      expect(headers).to.deep.equal({
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
        } catch (err){
          functionDidThrow = true;
          expect(err.message).to.include("no 'internalAuthTokenProvider' with a 'getToken' function was supplied to the API client");
        }

        if (!functionDidThrow) {
          throw new Error("Test failed - function did not throw");
        }
      });
    });

    it("should return a headers object which includes the provided 'token' in the 'x-api-key' field", () => {
      const token = "E7excc6eXRKarIONB2gA",
        headers = authorizationHeaders({token});

      expect(headers).to.deep.equal({
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

        expect(headers).to.deep.equal({
          "x-api-key": token,
          "test-header": "123"
        });
      });

      it("should add the arbitrary headers passed by argument", () => {
        const newHeaders = {
          "test-header": "123",
          "x-amzn-trace-id": "25342352"
        };

        const headers = authorizationHeaders({headers: newHeaders});

        expect(headers).to.deep.equal({
          "test-header": "123",
          "x-amzn-trace-id": "25342352"
        });
      });

      it("should not add anything if headers is not an object", () => {
        const token = "E7excc6eXRKarIONB2gA";
        const headers = authorizationHeaders({token, headers: 123});

        expect(headers).to.deep.equal({
          "x-api-key": token
        });
      });

      it("should ignore x-amzn-trace-id if empty", () => {
        const newHeaders = {
          "test-header": "123",
          "x-amzn-trace-id": ""
        };

        const headers = authorizationHeaders({headers: newHeaders});

        expect(headers).to.not.haveOwnProperty("x-amzn-trace-id");
        expect(headers).to.deep.equal({
          "test-header": "123"
        });
      });
    });
  });
});
