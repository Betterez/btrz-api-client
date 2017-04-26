const { axiosMock } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/stations', function() {
  const token = 'I owe you a token';
  
  before(function() {
    axiosMock.onGet(`/stations`).reply(200);
  });

  it("should list stations", function() {
    return api.inventory.stations.all({ token });
  });

});