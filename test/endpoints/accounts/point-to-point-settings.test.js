const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/point-to-point", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the point to point settings", () => {
    axiosMock.onGet("/point-to-point-settings")
      .reply(expectRequest({statusCode: 200, token}));

    return api.accounts.pointToPointSettings.get({token, jwtToken});
  });

  it("should update point to point settings", () => {
    const pointToPointSettings = {
      useOnlySpecificFareTable: true
    };

    axiosMock.onPut("/point-to-point-settings")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));

    return api.accounts.pointToPointSettings.update({
      token, jwtToken, pointToPointSettings
    });
  });
});
