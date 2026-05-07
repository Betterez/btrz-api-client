const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/bundle-fares", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list fares for a bundle", () => {
    const bundleId = "bundleId1";
    const productId = "productId1";
    axiosMock.onGet(`/bundle/${bundleId}/product/${productId}`).reply(expectRequest({statusCode: 200, token}));
    return api.inventory.bundleFares.all({token, bundleId, productId});
  });
});
