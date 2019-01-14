const port = process.env.SEATMAPS_API_PORT,
  token = process.env.API_TOKEN,
  jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    seatmaps: (baseUrl) => `${baseUrl}/seatmaps`
  }
});

const { statusCode } = require("./../../test-integration-helpers");

describe("seatmaps/seat", () => {

  it("should remove the seat", () => {
    const params = {
      "op": "remove",
      "seatmap-id": "123",
      "seat": {
        "leg_from": "0",
        "leg_to": "1",
        "seat_id": "section-5c13c12d062bb938026c3161-row-0-seat-0"
      }
    };
    return api.seatmaps.seat.update({ token, jwtToken, params })
      .then(statusCode(200));
  });

});
