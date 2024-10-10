const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/rms-settings", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the revenue management settings", () => {
    axiosMock.onGet("/rms-settings")
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.revenueManagementSettings.get({token, jwtToken});
  });

  it("should update revenue management settings", () => {
    const revenueManagementSettings = {
      enabled: true
    };

    axiosMock.onPut("/rms-settings")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.revenueManagementSettings.update({
      token, jwtToken, revenueManagementSettings
    });
  });
});
