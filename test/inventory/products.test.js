const { axiosMock } = require("./../test-helpers");
const client = require("./../../index").defaults({});

describe('inventory/products', function() {
  const token = 'I owe you a token';
  
  before(function() {
    axiosMock.onGet(`/inventory/products`).reply(200, {})
  });

  it("should list products", function() {
    return client.inventory.products.index({ token });
  });

});