const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/products', function() {
  const token = 'I owe you a token';
  
  afterEach(function() {
    axiosMock.reset();
  })

  it("should list products", function() {
    axiosMock.onGet(`/products`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.products.all({ token });
  });

});