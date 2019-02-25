const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/stations/zones', function() {
  const token = 'I owe you a token';

  afterEach(function() {
    axiosMock.reset();
  });

  it("should list zones", function() {
    axiosMock.onGet(`/stations/zones`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.stationsZones.get({ token });
  });

});
