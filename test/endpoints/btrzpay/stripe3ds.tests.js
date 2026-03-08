const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("btrzpay/stripe3ds", () => {
  const token = "api-key";
  const jwtToken = "jwt-token";

  afterEach(() => {
    axiosMock.reset();
  });

  describe("createPaymentIntent", () => {
    it("should POST stripe-payment-intent with providerName and data using token and jwtToken", () => {
      const body = {providerName: "stripe", data: {amount: "5.00", currency: "USD", transactionId: "123"}};
      axiosMock.onPost("/stripe-payment-intent", body).reply(expectRequest({statusCode: 200, token, jwtToken}));
      return api.btrzpay.stripe3ds.createPaymentIntent({token, jwtToken, providerName: "stripe", data: body.data});
    });

    it("should POST stripe-payment-intent with jwtToken and optional headers", () => {
      const body = {providerName: "stripe", data: {}};
      axiosMock.onPost("/stripe-payment-intent", body).reply(expectRequest({statusCode: 200, token, jwtToken}));
      return api.btrzpay.stripe3ds.createPaymentIntent({
        token,
        jwtToken,
        providerName: "stripe",
        data: {},
        headers: {"X-Custom": "v"}
      });
    });
  });
});
