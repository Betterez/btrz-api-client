const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/pay-on-accounts", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list pay-on-accounts", () => {
    axiosMock.onGet("/pay-on-accounts").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.payOnAccounts.all({token});
  });

  it("should list pay-on-accounts with responseType blob", () => {
    const responseType = "blob";
    axiosMock.onGet("/pay-on-accounts").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.payOnAccounts.all({token, responseType});
  });
});
