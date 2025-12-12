const { axiosMock, expectRequest } = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('coltrane/merged-fare-tables', function() {
  const token = 'I owe you a token';

  afterEach(function() {
    axiosMock.reset();
  });

  it("should get merged fare tables", function() {
    const routeId = "507f1f77bcf86cd799439011";
    const productId = "507f1f77bcf86cd799439012";
    axiosMock.onGet(`/routes/${routeId}/merged-fare-tables/${productId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.coltrane.mergedFareTables.get({ token, routeId, productId });
  });
});
