const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("webhooks/marketplace-subscriptions", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should create a marketplace subscription", () => {
    axiosMock.onPost("/marketplace-subscriptions").reply(expectRequest({statusCode: 201, token, jwtToken}));
    return api.webhooks.marketplaceSubscriptions.create({
      token,
      jwtToken,
      marketplace: "busbud"
    });
  });

  it("should delete a marketplace subscription", () => {
    axiosMock.onDelete("/marketplace-subscriptions").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.webhooks.marketplaceSubscriptions.delete({
      token,
      jwtToken,
      marketplace: "busbud"
    });
  });
});
