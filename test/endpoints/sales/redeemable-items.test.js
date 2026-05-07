const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("sales/redeemable-items", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a redeemable item by id", () => {
    const redeemableItemId = "RI-12345ABCDE";
    const providerId = "providerId1";
    axiosMock.onGet(`/redeemable-items/${redeemableItemId}`).reply(expectRequest({statusCode: 200, token}));
    return api.sales.redeemableItems.get({token, redeemableItemId, query: {providerId}});
  });

  it("should get all the valid redeemable items", () => {
    const providerId = "providerId1";
    const ids = "RIDisplayId1,RIDisplayId2";
    axiosMock.onGet("/redeemable-items").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.sales.redeemableItems.getValid({token, jwtToken, query: {providerId, ids}});
  });
});
