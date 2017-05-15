const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/stations', function() {
  const token = 'I owe you a token';
  
  afterEach(function() {
    axiosMock.restore();
  });

  it("should list stations", function() {
    axiosMock.onGet(`/stations`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.stations.all({ token });
  });

});