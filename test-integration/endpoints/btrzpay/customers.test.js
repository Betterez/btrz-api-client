const assert = require("node:assert/strict");
const port = process.env.BTRZPAY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const customerId = process.env.CUSTOMER_ID;
const paymentMethodId = process.env.PAYMENT_METHOD_ID;
const providerCustomerProfileId = process.env.PROVIDER_CUSTOMER_PROFILE_ID;
const api = require("../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    btrzpay: (baseUrl) => {
      return `${baseUrl}/btrz-pay`;
    }
  }
});

// eslint-disable-next-line no-template-curly-in-string
describe("btrz-pay/payment-methods/${paymentMethodId}/customers", () => {
  it("should create a customer", async () => {
    const customer = {
      customerId,
      providerCustomerProfileId
    };

    const {status, data} = await api.btrzpay.customers.create({
      jwtToken,
      token,
      paymentMethodId,
      customer
    });
    assert.deepStrictEqual(status, 200);
    assert.deepStrictEqual(data.customerId, customer.customerId);
    assert.deepStrictEqual(data.paymentMethodId, paymentMethodId);
    assert.ok(data.providerCustomerProfileId);
  });

  it("should get a customer", async () => {
    const {status, data} = await api.btrzpay.customers.get({
      jwtToken,
      token,
      paymentMethodId,
      customerId
    });
    assert.deepStrictEqual(status, 200);
    assert.deepStrictEqual(data.customer.customerId, customerId);
  });

  it("should delete a customer", async () => {
    const {status, data} = await api.btrzpay.customers.remove({
      jwtToken,
      token,
      paymentMethodId,
      customerId
    });
    assert.deepStrictEqual(status, 200);
    assert.deepStrictEqual(data.result, 1);
  });
});
