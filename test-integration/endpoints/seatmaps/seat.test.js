const port = process.env.SEATMAPS_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    seatmaps: (baseUrl) => { return `${baseUrl}/seatmaps`; }
  }
});

const {statusCode} = require("./../../test-integration-helpers.js");

describe("seatmaps/seat", () => {
  it("should remove the seat", () => {
    const params = {
      "op": "remove",
      "seatmap_id": "123",
      "seat_id": "section-5c13c12d062bb938026c3161-row-0-seat-0"
    };
    return api.seatmaps.seat.update({token, jwtToken, params})
      .then(statusCode(200));
  });
});
