const {axiosMock, expectRequest} = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("btrzpay/customersCards", () => {
  const token = "token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a customer card", () => {
    const paymentMethodId = "5ad7804216b426412c19f06f";
    const customerId = "5ad7804216b426412c19f06g";
    const customerCardId = "5ad7804216b426412c19f77g";
    axiosMock.onGet(`/payment-methods/${paymentMethodId}/customers/${customerId}/cards/${customerCardId}`).reply(expectRequest({statusCode: 200, token}));
    return api.btrzpay.customerCards.get({
      token,
      paymentMethodId,
      customerId,
      customerCardId
    });
  });

  it("should get all customer cards", () => {
    const paymentMethodId = "5ad7804216b426412c19f06f";
    const customerId = "5ad7804216b426412c19f06g";
    axiosMock.onGet(`/payment-methods/${paymentMethodId}/customers/${customerId}/cards`).reply(expectRequest({statusCode: 200, token}));
    return api.btrzpay.customerCards.all({
      token,
      paymentMethodId,
      customerId
    });
  });

  it("should create a customer card", () => {
    const paymentMethodId = "5ad7804216b426412c19f06f";
    const customerId = "5ad7804216b426412c19f06g";    
    axiosMock.onPost(`/payment-methods/${paymentMethodId}/customers/${customerId}/cards`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.btrzpay.customerCards.create({
      jwtToken,
      token,
      paymentMethodId,
      customerId,
      customerCard: {
        customerId: "5ad7804216b426412c19f06g",
        providerCustomerProfileId: "test_value_1"
      }
    });
  });

  it("should delete a customer card", () => {
    const paymentMethodId = "5ad7804216b426412c19f06f";
    const customerId = "5ad7804216b426412c19f06g";
    const customerCardId = "5ad7804216b426412c19f77g";
    axiosMock.onDelete(`/payment-methods/${paymentMethodId}/customers/${customerId}/cards/${customerCardId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.btrzpay.customerCards.remove({
      jwtToken,
      token,
      paymentMethodId,
      customerId,
      customerCardId
    });
  });
});
