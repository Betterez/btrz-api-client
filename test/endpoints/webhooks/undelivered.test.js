const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("webhooks/undelivered", () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(function() {
    axiosMock.restore();
  });

  it("should list undelivered", () => {
    axiosMock.onGet("/undelivered").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.webhooks.undelivered.all({token, jwtToken})
  });

  it("should get an undelivered by id", function () {
    const id = "undeliveredId";
    axiosMock.onGet(`/undelivered/${id}`).reply(expectRequest({ statusCode: 200, token }));
    return api.webhooks.undelivered.getById({ token, id });
  });

  it("should resend an undelivered", function() {
    const id = "123123123123",
      undelivered =  {
        accumulateOn: "redemption",
        disabled: false,
        expirationDays: 20,
        name: "An updated undelivered",
        terms: "Updated webhooks undelivered terms",
        paymentMethods: ["cash"],
        products: ["123123123"]
      };
    axiosMock.onPut(`/undelivered/${id}/retry`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.webhooks.undelivered.resend({ jwtToken, token, id, undelivered });
  });
});
