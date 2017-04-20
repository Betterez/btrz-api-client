const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../index");
const client = api.defaults({ baseURL: `http://localhost:${port}` });

const { matchHeaders } = require("./../test-integration-helpers");  

describe("inventory/products", function() {

  it("should list products", function() {
    return client.inventory.products.index({ token })
      .then(matchHeaders('x-api-key'))
  });

});