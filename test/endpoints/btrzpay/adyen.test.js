const {
  axiosMock, expectRequest
} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("btrzpay/adyen", () => {
  const token = "token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the adyen payment methods", () => {
    axiosMock.onGet("/adyen-payment-methods").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.btrzpay.adyen.getPaymentMethods({
      token,
      jwtToken
    });
  });

  it("should get the adyen terminals", () => {
    axiosMock.onGet("/adyen-terminals").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.btrzpay.adyen.getTerminals({
      token,
      jwtToken
    });
  });
});
