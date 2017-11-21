const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe("inventory/items", function() {

  it("should list items", function() {
    return api.inventory.items.all({ token, query: { isParcel: true } })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200))
      .then((response) => {
        console.log(response.data.items);
      })
  });

});