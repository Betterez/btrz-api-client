const { axiosMock, expectRequest } = require("./../../test-helpers"),
  api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("btrzpay/payment-methods", () => {
  const token = "token",
    jwtToken = 'I owe you a JWT token';

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a payment method by provider name", () => {
    const providerName = "providerName";
    axiosMock.onGet(`/payment-methods?providerName=${providerName}`).reply(expectRequest({ statusCode: 200, token }));
    return api.btrzpay.paymentMethods.getByProviderName({ token, providerName });
  });

  it("should create a payment method", () => {
    axiosMock.onPost("/payment-methods").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.btrzpay.paymentMethods.create({
      jwtToken,
      token,
      paymentMethod: {
        providerName: 'provider',
        displayName: "display name"
      }
    });
  });
});
