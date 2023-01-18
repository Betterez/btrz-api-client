const {
  axiosMock, expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/shift-settings", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });


  it("should update the shift settings", () => {
    axiosMock.onPut("/shift-settings").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.shiftSettings.update({
      jwtToken,
      token,
      shiftSettings: {
        agencyShiftClosure: true
      }
    });
  });

  it("should get the shift settings", () => {
    axiosMock.onGet("/shift-settings").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.shiftSettings.get({
      jwtToken,
      token
    });
  });
});
