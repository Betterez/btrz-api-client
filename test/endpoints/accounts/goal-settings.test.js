const {
  axiosMock, expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/goal-settings", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });


  it("should update the goal settings", () => {
    axiosMock.onPut("/goal-settings").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.goalSettings.update({
      jwtToken,
      token,
      goalSettings: {
        baseUrl: "https://test.com"
      }
    });
  });

  it("should get the goal settings", () => {
    axiosMock.onGet("/goal-settings").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.goalSettings.get({
      jwtToken,
      token
    });
  });
});
