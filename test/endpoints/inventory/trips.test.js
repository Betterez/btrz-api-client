const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/trips', function() {
  const token = 'I owe you a token';
  
  afterEach(function() {
    axiosMock.reset();
  })

  it("should list trips", function() {
    axiosMock.onGet(`/trips`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.trips.all({ token });
  });

});