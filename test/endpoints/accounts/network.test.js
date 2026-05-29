const assert = require("node:assert/strict");
const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/interline", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET a list of agencies", () => {
    axiosMock.onGet("/network/agencies").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.network.agencies.all({
      token,
      jwtToken
    }).then((httpResponse) => {
      assert.deepStrictEqual(httpResponse.status, 200);
    });
  });

  it("should GET an agency by sellerID", () => {
    axiosMock.onGet("/network/agencies/sellerId").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.network.agencies.get({
      token,
      sellerId: "sellerId",
      jwtToken
    }).then((httpResponse) => {
      assert.deepStrictEqual(httpResponse.status, 200);
    });
  });

  it("should update an agency", () => {
    const agency = {
      name: "A"
    };
    const query = {
      superUserId: "superUserId",
      superUserHash: "superUserHash"
    };
    const sellerId = "A";
    axiosMock.onPut(`/network/agencies/${sellerId}`)
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.network.agencies.update({
      token, jwtToken, agency, sellerId, query
    });
  });

  it("should create an agency", () => {
    const agency = {
      name: "A"
    };

    axiosMock.onPost("/network/agencies")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.network.agencies.create({
      token, jwtToken, agency
    });
  });

  it("should remove a product from all agencies", () => {
    const productId = "productId";
    axiosMock.onPut("/network/agencies/remove-product").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.network.agencies.removeProduct({
      token, jwtToken, productId
    });
  });

  it("should remove a fare from all agencies", () => {
    const fareId = "fareId";
    axiosMock.onPut("/network/agencies/remove-fare").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.network.agencies.removeFare({
      token, jwtToken, fareId
    });
  });

  it("should GET banks for agency by providerId", () => {
    const providerId = "6410ad00d02bf9068d7345e5";
    axiosMock.onGet("/network/agencies/banks").reply((config) => {
      assert.strictEqual(config.params.providerId, providerId);
      return [200, {banks: []}];
    });
    return api.accounts.network.agencies.banks({
      token,
      jwtToken,
      providerId
    }).then((httpResponse) => {
      assert.deepStrictEqual(httpResponse.status, 200);
      assert.deepStrictEqual(httpResponse.data.banks, []);
    });
  });
});
