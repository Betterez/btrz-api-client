const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/accounts/twilio-settings", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the printers", () => {
    const query = {};

    axiosMock.onGet("/twilio-settings", {params: query})
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.twilioSettings.get({token, query});
  });

  it("should update a print setting", () => {
    const twilioSettings = {
      name: "A"
    };

    axiosMock.onPut("/twilio-settings")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.twilioSettings.update({
      token, jwtToken, twilioSettings
    });
  });
});
