const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/market-pricing", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the market pricing settings", () => {
    axiosMock.onGet("/market-pricing-settings")
      .reply(expectRequest({statusCode: 200, token}));

    return api.accounts.marketPricingSettings.get({token, jwtToken});
  });

  it("should update market pricing settings", () => {
    const marketPricingSettings = {
      useOnlySpecificFareTable: true
    };

    axiosMock.onPut("/market-pricing-settings")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));

    return api.accounts.marketPricingSettings.update({
      token, jwtToken, marketPricingSettings
    });
  });
});
