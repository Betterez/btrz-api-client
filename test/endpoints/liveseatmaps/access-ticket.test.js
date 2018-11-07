const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("liveseatmaps/ticket", () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(function() {
    axiosMock.restore();
  });

  it("should return an access ticket", () => {
    axiosMock.onPost(`/access-ticket`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.liveSeatmaps.accessTicket.create({
      jwtToken,
      token
    });
  });
});
