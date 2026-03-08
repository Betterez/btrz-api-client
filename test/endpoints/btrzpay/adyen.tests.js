const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("btrzpay/adyen", () => {
  const token = "api-key";
  const jwtToken = "jwt-token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get Adyen payment methods with token", () => {
    axiosMock.onGet("/adyen-payment-methods").reply(expectRequest({statusCode: 200, token}));
    return api.btrzpay.adyen.getPaymentMethods({token});
  });

  it("should get Adyen payment methods with token and jwtToken", () => {
    axiosMock.onGet("/adyen-payment-methods").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.btrzpay.adyen.getPaymentMethods({token, jwtToken});
  });

  it("should get Adyen payment methods with query params", () => {
    const query = {countryCode: "US", currencyCode: "USD", amount: 100, transactionId: "tx-1"};
    axiosMock.onGet("/adyen-payment-methods", {params: query}).reply(expectRequest({statusCode: 200, token}));
    return api.btrzpay.adyen.getPaymentMethods({token, query});
  });
});
