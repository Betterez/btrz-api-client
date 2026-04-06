const {
  axiosMock, expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/system-model-settings", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";
  const modelName = "station";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should update system model settings", () => {
    const path = `/system-models/${modelName}/settings`;
    axiosMock.onPut(path).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.systemModelSettings.update({
      jwtToken,
      token,
      modelName,
      systemModelSettings: {
        requiredFields: []
      }
    });
  });

  it("should get system model settings", () => {
    const path = `/system-models/${modelName}/settings`;
    axiosMock.onGet(path).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.systemModelSettings.get({
      jwtToken,
      token,
      modelName
    });
  });
});
