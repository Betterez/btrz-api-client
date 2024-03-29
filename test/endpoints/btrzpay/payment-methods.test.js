const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("btrzpay/payment-methods", () => {
  const token = "token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list payment methods", () => {
    axiosMock.onGet("/payment-methods").reply(expectRequest({statusCode: 200, token }));
    return api.btrzpay.paymentMethods.all({token});
  });

  it("should list payment methods when request include jwtToken", () => {
    axiosMock.onGet("/payment-methods").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.btrzpay.paymentMethods.all({token, jwtToken});
  });

  it("should get a payment method by provider name", () => {
    const providerName = "providerName";
    axiosMock.onGet(`/payment-methods?providerName=${providerName}`).reply(expectRequest({statusCode: 200, token}));
    return api.btrzpay.paymentMethods.getByProviderName({token, providerName});
  });

  it("should create a payment method", () => {
    axiosMock.onPost("/payment-methods").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.btrzpay.paymentMethods.create({
      jwtToken,
      token,
      paymentMethod: {
        providerName: "provider",
        displayName: "display name"
      }
    });
  });

  it("should get a payment method", () => {
    const paymentMethodId = "5ad7804216b426412c19f06f";
    axiosMock.onGet(`/payment-methods/${paymentMethodId}`).reply(expectRequest({statusCode: 200, token}));
    return api.btrzpay.paymentMethods.get({
      token,
      paymentMethodId
    });
  });

  it("should get a payment method, with a query", () => {
    const paymentMethodId = "5ad7804216b426412c19f06f";
    const providerId = "5ad7804216b426412c19ffff";
    axiosMock.onGet(`/payment-methods/${paymentMethodId}`, {params: {providerId}}).reply(expectRequest({statusCode: 200, token}));
    return api.btrzpay.paymentMethods.get({
      token,
      paymentMethodId,
      query: {providerId}
    });
  });

  it("should update a payment method", () => {
    const paymentMethodId = "5ad7804216b426412c19f06f";
    axiosMock.onPut(`/payment-methods/${paymentMethodId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));

    return api.btrzpay.paymentMethods.update({
      jwtToken,
      token,
      paymentMethodId,
      paymentMethod: {
        "id": "id",
        "providerId": "providerId"
      }
    });
  });

  it("should add payment methods to agency", () => {
    axiosMock.onPost("/payment-methods-to-agencies").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));

    return api.btrzpay.paymentMethods.setToAgency({
      jwtToken,
      token,
      providerId: "providerId",
      agencyId: "agencyId",
      paymentMethodNames: ["cash", "ivr"]
    });
  });

  it("should return the default payment methods", () => {
    const data = [];
    axiosMock.onPost("/default-payment-methods").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      data
    }));

    return api.btrzpay.paymentMethods.createDefaultPaymentMethods({
      jwtToken,
      token
    });
  });

  it("should delete all the customers and cards asocciated with a payment method ", () => {
    const paymentMethodId = "c7fe2c51-178b-4ae3-bbe8-0c606f3e0117";
    axiosMock.onDelete(`/payment-methods/${paymentMethodId}/customers`).reply(expectRequest({
      statusCode: 202,
      token,
      jwtToken
    }));

    return api.btrzpay.paymentMethods.deleteCustomersCreditCardInfo({
      jwtToken,
      token,
      paymentMethodId
    });
  });

  it("should delete domain for all payments methods from account", () => {
    const domain = "domain1";
    axiosMock.onDelete(`/payment-methods/domains/${domain}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));

    return api.btrzpay.paymentMethods.deletePaymentMethodsDomain({
      jwtToken,
      token,
      domain
    });
  });
});
