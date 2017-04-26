const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost`, 
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}:${port}`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe("inventory/stations", () => {

  it("should list stations", () => {
    return api.inventory.stations.all({ token })
      .then(
        matchHeaders('x-api-key'),
        statusCode(200)
      )
  });

  it("should get the station specified", (done) => {
    api.inventory.stations.all({ token })
      .then((response) => {
        if (response.data.stations && response.data.stations.length > 0) {
          api.inventory.stations.get({token, id: response.data.stations[0]._id.toString()})
            .then(
              matchHeaders('x-api-key'),
              statusCode(200),
              done()
            );
        } else {
          done()
        }
      });
  });

});