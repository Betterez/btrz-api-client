const assert = require("node:assert/strict");
const port = process.env.BTRZPAY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const customerId = process.env.CUSTOMER_ID;
const customerCardId = process.env.CUSTOMER_CARD_ID;
const paymentMethodId = process.env.PAYMENT_METHOD_ID;
const providerPaymentProfileId = process.env.PROVIDER_PAYMENT_PROFILE_ID;
const api = require("../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    btrzpay: (baseUrl) => { return `${baseUrl}/btrz-pay`; }
  }
});

describe(`btrz-pay/payment-methods/${paymentMethodId}/customers/${customerId}/customerCards`, () => {
  it("should create a customer card", async () => {
    const customerCard = {
      customerId,
      providerPaymentProfileId,
      maskedPAN: "4455",
      expiryDate: "07/2001",
      cardType: "visa",
      provider: "authorizeNet",
      isDefault: true
    };

    const {status, data} = await api.btrzpay.customerCards.create({
      jwtToken,
      token,
      paymentMethodId,
      customerId,
      customerCard
    });
    assert.deepStrictEqual(status, 200);
    assert.deepStrictEqual(data.customerId, customerCard.customerId);
    assert.deepStrictEqual(data.paymentMethodId, paymentMethodId);
    assert.ok(data.id);
  });

  it("should get a customer card", async () => {
    const {status, data} = await api.btrzpay.customerCards.get({
      jwtToken,
      token,
      paymentMethodId,
      customerId,
      customerCardId
    });
    assert.deepStrictEqual(status, 200);
    assert.deepStrictEqual(data.customerCard.id, customerCardId);
    assert.deepStrictEqual(data.customerCard.providerPaymentProfileId, providerPaymentProfileId);
    assert.ok(data.customerCard.id);
  });

  it("should get all customer cards", async () => {
    const {status, data} = await api.btrzpay.customerCards.all({
      jwtToken,
      token,
      paymentMethodId,
      customerId
    });
    assert.deepStrictEqual(status, 200);
    assert.deepStrictEqual(data.customerCards.length, 2);
  });

  it("should delete a customer card", async () => {
    const {status, data} = await api.btrzpay.customerCards.remove({
      jwtToken,
      token,
      paymentMethodId,
      customerId,
      customerCardId
    });
    assert.deepStrictEqual(status, 200);
    assert.deepStrictEqual(data.result, 1);
  });
});
