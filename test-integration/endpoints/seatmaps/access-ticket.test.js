const port = process.env.LIVESEATMAPS_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    liveSeatmaps: (baseUrl) => `${baseUrl}/seatmaps`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe.only("seatmaps/access-ticket", () => {

  it("should list fees", () => {
    return api.liveSeatmaps.accessTicket.create({ token })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200));
  });

});