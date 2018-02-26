const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe("inventory/products", function() {

  it("should list products", function() {
    return api.inventory.products.all({ token, query: { isParcel: true } })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200))
  });

  it.only("should get product by id", function() {
    return api.inventory.products.get({token, productId: "595f9ce6df9127b11d5e03ba"})
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200));
  });

});