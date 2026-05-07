const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("seatmaps/ticket", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should return an access ticket", () => {
    axiosMock.onPost("/access-ticket").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.seatmaps.accessTicket.create({
      jwtToken,
      token
    });
  });
});
