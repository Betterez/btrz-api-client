const port = process.env.SEATMAPS_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    seatmaps: (baseUrl) => { return `${baseUrl}/seatmaps`; }
  }
});

const {matchHeaders, statusCode} = require("./../../test-integration-helpers.js");

describe("seatmaps/access-ticket", () => {
  it("should list fees", () => {
    return api.seatmaps.accessTicket.create({token})
      .then(matchHeaders("x-api-key"))
      .then(statusCode(200));
  });
});
