const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/transport-regulation-settings/cnrt", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the transport regulation settings for CNRT", () => {
    axiosMock.onGet("/transport-regulation-settings/cnrt")
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.transportRegulationSettingsForCNRT.get({token, jwtToken});
  });

  it("should update transport regulation settings for CNRT", () => {
    const transportRegulationSettingsForCNRT = {
      enabled: true
    };

    axiosMock.onPut("/transport-regulation-settings/cnrt")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.transportRegulationSettingsForCNRT.update({
      token, jwtToken, transportRegulationSettingsForCNRT
    });
  });
});
