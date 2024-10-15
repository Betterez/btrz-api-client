const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/ticket-movement-settings", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the ticket movement settings", () => {
    axiosMock.onGet("/ticket-movement-settings")
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.ticketMovementSettings.get({token, jwtToken});
  });

  it("should update ticket movement settings", () => {
    const ticketMovementSettings = {
      enabled: true
    };

    axiosMock.onPut("/ticket-movement-settings")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken,
        body: ticketMovementSettings
      }));
    return api.accounts.ticketMovementSettings.update({
      token, jwtToken, ticketMovementSettings
    });
  });
});
