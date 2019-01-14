const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("seatmaps/seat", () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(function() {
    axiosMock.restore();
  });

  it("should perform a seat update", () => {
    const params = {
      "op": "",
      "seatmap-id": "123",
      "seat": {}
    };
    axiosMock.onPost(`/seat`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.seatmaps.seat.update({
      jwtToken,
      token,
      params
    });
  });
});
