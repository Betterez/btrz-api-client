const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('sales/redeemable-items', function() {
  const token = 'I owe you a token';

  afterEach(function() {
    axiosMock.reset();
  });

  it("should get a redeemable item by id", function() {
    const redeemableItemId = "RI-12345ABCDE",
      providerId = "providerId1";
    axiosMock.onGet(`/redeemable-items/${redeemableItemId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.sales.redeemableItems.get({ token, redeemableItemId, query: {providerId} });
  });

});
