const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/journey-prices", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the journey prices settings", () => {
    axiosMock.onGet("/journey-prices-settings")
      .reply(expectRequest({statusCode: 200, token}));

    return api.accounts.journeyPricesSettings.get({token, jwtToken});
  });

  it("should update journey prices settings", () => {
    const journeyPricesSettings = {
      recordProtectionRules: [{attribute: "isBase", rule: "EQUALS", value: true}]
    };

    axiosMock.onPut("/journey-prices-settings")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));

    return api.accounts.journeyPricesSettings.update({
      token, jwtToken, journeyPricesSettings
    });
  });
});
