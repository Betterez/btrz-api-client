const { axiosMock } = require("./../../test-helpers");
const client = require("./../../../index").createApiClient({ baseURL: "http://test.com" });

describe('inventory/products', function() {
  const token = 'I owe you a token';
  
  before(function() {
    axiosMock.onGet(`/inventory/products`).reply(200, {})
  });

  it("should list products", function() {
    return client.inventory.products.all({ token });
  });

});