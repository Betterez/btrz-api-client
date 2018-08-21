const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/route', function() {
  const token = 'I owe you a token';
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should get route by id", function() {
    axiosMock.onGet(`/route/1`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.routes.get({ token, routeId: 1 });
  });

  it("should get prices", function() {
    axiosMock.onGet(`/routes/prices`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.routes.prices({ token, productId: 1, originId: 1, destinationId: 1, channel: "backoffice" }, {});
  });

});
