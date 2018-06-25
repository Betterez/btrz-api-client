const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/bundle-fares', function() {
  const token = 'I owe you a token';

  afterEach(function() {
    axiosMock.reset();
  });

  it("should list fares for a bundle", function() {
    const bundleId = "bundleId1",
      productId = "productId1";
    axiosMock.onGet(`/bundle/${bundleId}/product/${productId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.bundleFares.all({ token, bundleId, productId });
  });

});
