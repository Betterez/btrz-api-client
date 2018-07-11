const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("webhooks/subscriptions", () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(function() {
    axiosMock.restore();
  });

  it("should list subscriptions", () => {
    axiosMock.onGet("/subscriptions").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.webhooks.subscriptions.all({token, jwtToken})
  });

  it("should get a subscription by id", function () {
    const id = "subscriptionId";
    axiosMock.onGet(`/subscriptions/${id}`).reply(expectRequest({ statusCode: 200, token }));
    return api.webhooks.subscriptions.getById({ token, id });
  });

  it("should delete a subscription by id", function () {
    const id = "subscriptionId";
    axiosMock.onDelete(`/subscriptions/${id}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.webhooks.subscriptions.deleteById({ token, id, jwtToken });
  });


  it("should create a subscription", () => {
    axiosMock.onPost(`/subscriptions`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.webhooks.subscriptions.create({
      jwtToken,
      token,
      subscription: {
        accumulateOn: "redemption",
        disabled: false,
        expirationDays: 20,
        name: "A subscription",
        terms: "webhooks subscription terms",
        paymentMethods: ["cash"],
        products: ["123123123"]
      }
    });
  });

  it("should PUT a subscription", function() {
    const id = "123123123123",
      subscription =  {
        accumulateOn: "redemption",
        disabled: false,
        expirationDays: 20,
        name: "An updated subscription",
        terms: "Updated webhooks subscription terms",
        paymentMethods: ["cash"],
        products: ["123123123"]
      };
    axiosMock.onPut(`/subscriptions/${id}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.webhooks.subscriptions.put({ jwtToken, token, id, subscription });
  });
});
