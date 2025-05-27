const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/pay-on-accounts", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list pay-on-accounts", () => {
    axiosMock.onGet("/pay-on-accounts").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.payOnAccounts.all({token, jwtToken});
  });

  it("should list pay-on-accounts with responseType blob", () => {
    const responseType = "blob";
    axiosMock.onGet("/pay-on-accounts").reply(expectRequest({statusCode: 200, token, jwtToken, responseType}));
    return api.inventory.payOnAccounts.all({token, jwtToken, responseType});
  });
});
