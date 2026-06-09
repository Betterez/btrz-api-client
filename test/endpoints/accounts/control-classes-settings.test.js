const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/control-classes-settings", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the control classes settings", () => {
    axiosMock.onGet("/control-classes-settings")
      .reply(expectRequest({statusCode: 200, token}));

    return api.accounts.controlClassesSettings.get({token, jwtToken});
  });

  it("should update control classes settings", () => {
    const controlClassesSettings = {
      namingPolicy: "UNIQUE_BY_ACCOUNT",
      childSelectionCriteriaDefault: "MOST_SPECIFIC"
    };

    axiosMock.onPut("/control-classes-settings")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));

    return api.accounts.controlClassesSettings.put({
      token, jwtToken, controlClassesSettings
    });
  });
});
