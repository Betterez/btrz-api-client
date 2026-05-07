const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => { return `${baseUrl}/inventory`; }
  }
});

const {matchHeaders, statusCode} = require("./../../test-integration-helpers.js");

describe("inventory/stations", () => {
  it("should list stations", () => {
    return api.inventory.stations.all({token})
      .then(matchHeaders("x-api-key"))
      .then(statusCode(200));
  });

  it("should get the station specified", () => {
    return api.inventory.stations.all({token})
      .then((response) => {
        if (response.data.stations && response.data.stations.length > 0) {
          return api.inventory.stations.get({token, id: response.data.stations[0]._id.toString()})
            .then(matchHeaders("x-api-key"))
            .then(statusCode(200));
        }
        throw new Error("No stations were found");
      });
  });
});
