const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe("inventory/trips", function() {

  it("should list trips", function() {
    const query = {
      productId: "595f9c7007ee12686d000033",
      originId: "599602791c926ad5506cddc4",
      destinationId: "599602a01c926ad5506cddc5",
      fareIds: "595f9f62df9127b11d5e03bd:1",
      departureDate: "2017-12-21"
    }
    return api.inventory.trips.all({ token, query })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200))
      .then((res) => {
        console.log(JSON.stringify(res.data));
      })
  });

});