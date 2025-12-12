const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("btrzpay/customers", () => {
  const token = "token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a customer", () => {
    const paymentMethodId = "5ad7804216b426412c19f06f";
    const customerId = "5ad7804216b426412c19f06g";
    axiosMock.onGet(`/payment-methods/${paymentMethodId}/customers/${customerId}`).reply(expectRequest({statusCode: 200, token}));
    return api.btrzpay.customers.get({
      token,
      paymentMethodId,
      customerId
    });
  });

  it("should create a customer", () => {
    const paymentMethodId = "5ad7804216b426412c19f06f";
    axiosMock.onPost(`/payment-methods/${paymentMethodId}/customers`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.btrzpay.customers.create({
      jwtToken,
      token,
      paymentMethodId,
      customer: {
        customerId: "5ad7804216b426412c19f06g",
        providerCustomerProfileId: "test_value_1"
      }
    });
  });

  it("should delete a customer", () => {
    const paymentMethodId = "5ad7804216b426412c19f06f";
    const customerId = "5ad7804216b426412c19f06g";
    axiosMock
      .onDelete(`/payment-methods/${paymentMethodId}/customers/${customerId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.btrzpay.customers.remove({
      jwtToken,
      token,
      paymentMethodId,
      customerId
    });
  });
});
