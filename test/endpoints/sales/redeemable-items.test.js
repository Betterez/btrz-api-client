const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('sales/redeemable-items', function() {
  const token = 'I owe you a token';
  const jwtToken = "I owe you a JWT token";

  afterEach(function() {
    axiosMock.reset();
  });

  it("should get a redeemable item by id", function() {
    const redeemableItemId = "RI-12345ABCDE",
      providerId = "providerId1";
    axiosMock.onGet(`/redeemable-items/${redeemableItemId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.sales.redeemableItems.get({ token, redeemableItemId, query: {providerId} });
  });

  it("should get all the valid redeemable items", function() {
    const providerId = "providerId1";
    const ids = "RIDisplayId1,RIDisplayId2"
    axiosMock.onGet("/redeemable-items").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.sales.redeemableItems.getValid({ token, jwtToken, query: {providerId, ids} });
  });

});
