const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../index").createApiClient({ 
  baseURL: `http://localhost`, 
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}:${port}`
  }
});

const { matchHeaders } = require("./../../test-integration-helpers");

describe("inventory/products", function() {

  it("should list products", function() {
    return api.inventory.products.all({ token, query: { isParcel: true } })
      .then(matchHeaders('x-api-key'))
  });

});