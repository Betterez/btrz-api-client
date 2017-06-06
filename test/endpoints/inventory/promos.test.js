const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/promos', function() {
  const token = 'I owe you a token';
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should list promos", function() {
    axiosMock.onGet(`/promos`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.promos.all({ token });
  });

});