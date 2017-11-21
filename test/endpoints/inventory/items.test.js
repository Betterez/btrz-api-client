const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/items', function() {
  const token = 'I owe you a token';
  
  afterEach(function() {
    axiosMock.restore();
  })

  it("should list items", function() {
    axiosMock.onGet(`/items`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.items.all({ token });
  });

});