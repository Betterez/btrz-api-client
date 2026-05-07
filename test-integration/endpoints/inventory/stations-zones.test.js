const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => { return `${baseUrl}/inventory`; }
  }
});

const {matchHeaders, statusCode} = require("./../../test-integration-helpers.js");

describe("inventory/stations/zones", () => {
  it("should list the zones", () => {
    return api.inventory.stationsZones.get({token})
      .then(matchHeaders("x-api-key"))
      .then(statusCode(200));
  });
});
