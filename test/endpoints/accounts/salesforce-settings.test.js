const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/accounts/salesforce-settings", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the salesforce settings", () => {
    const query = {};

    axiosMock.onGet("/salesforce-settings", {params: query})
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.salesforceSettings.get({token, query});
  });

  it("should update the salesforce setting", () => {
    const salesforceSettings = {
      name: "A"
    };

    axiosMock.onPut("/salesforce-settings")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.salesforceSettings.update({
      token, jwtToken, salesforceSettings
    });
  });
});
