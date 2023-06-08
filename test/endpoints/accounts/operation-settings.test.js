const {
  axiosMock, expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/operation-settings", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });


  it("should update the operation settings", () => {
    axiosMock.onPut("/operation-settings").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.operationSettings.update({
      jwtToken,
      token,
      operationSettings: {
        schedulesOandDfromRoute: true
      }
    });
  });

  it("should get the operation settings", () => {
    axiosMock.onGet("/operation-settings").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.operationSettings.get({
      jwtToken,
      token
    });
  });
});
