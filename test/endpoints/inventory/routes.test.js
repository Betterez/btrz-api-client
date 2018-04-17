const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/route', function() {
  const token = 'I owe you a token';
  
  afterEach(function() {
    axiosMock.reset();
  })

  it("should get route by id", function() {
    axiosMock.onGet(`/route/1`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.routes.get({ token, routeId: 1 });
  });

});