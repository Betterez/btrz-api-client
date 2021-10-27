const {
  axiosMock, expectRequest
} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("operations/accounting-items", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all accounting items", () => {
    axiosMock.onGet("/accounting-items").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.operations.accountingItems.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should get an accounting item", () => {
    const accountingItemId = "1234";
    axiosMock.onGet(`/accounting-items/${accountingItemId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.operations.accountingItems.get({
      jwtToken,
      token,
      accountingItemId
    });
  });
});
