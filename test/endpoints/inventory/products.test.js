const { axiosMock } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/products', function() {
  const token = 'I owe you a token';
  
  before(function() {
    axiosMock.onGet(`/products`).reply(200, {})
  });

  it("should list products", function() {
    return api.inventory.products.all({ token });
  });

});