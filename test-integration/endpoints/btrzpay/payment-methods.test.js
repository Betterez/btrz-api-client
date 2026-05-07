const assert = require("node:assert/strict");
const port = process.env.BTRZPAY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const paymentMethodId = process.env.PAYMENT_METHOD_ID;
const providerAccountId = process.env.PROVIDER_ACCOUNT_ID;
const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    btrzpay: (baseUrl) => { return `${baseUrl}/btrz-pay`; }
  }
});

describe("btrz-pay/payment-methods", () => {
  it("should return empty success", () => {
    const providerName = "anyName";
    return api.btrzpay.paymentMethods.getByProviderName({token, jwtToken, providerName})
      .then((result) => {
        assert.deepStrictEqual(result.status, 200);
        assert.deepStrictEqual(result.data.paymentMethods, []);
      });
  });

  it("should create a payment method", () => {
    const paymentMethod = {
      "method": "method_name",
      "providerName": "referencedPayments",
      "displayName": "Method name",
      "ord": 900
    };

    return api.btrzpay.paymentMethods.create({
      jwtToken,
      token,
      paymentMethod
    })
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        assert.deepStrictEqual(data.paymentMethod.method, paymentMethod.method);
        assert.deepStrictEqual(data.paymentMethod.displayName, paymentMethod.displayName);
        assert.deepStrictEqual(data.paymentMethod.ord, paymentMethod.ord);
        assert.deepStrictEqual(data.paymentMethod.provider, paymentMethod.providerName);
      });
  });

  it("should get a payment method", () => {
    return api.btrzpay.paymentMethods.get({
      jwtToken,
      token,
      paymentMethodId
    })
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        assert.deepStrictEqual(data.paymentMethod._id, paymentMethodId);
      });
  });

  it("should get a payment method with providerId in query (Agency)", () => {
    return api.btrzpay.paymentMethods.get({
      jwtToken,
      token,
      paymentMethodId,
      query: {providerId: providerAccountId}
    })
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        assert.deepStrictEqual(data.paymentMethod._id, paymentMethodId);
      });
  });

  it("should update a payment method", () => {
    return api.btrzpay.paymentMethods.update({
      jwtToken,
      token,
      paymentMethodId,
      "paymentMethod": {
        "displayName": "Changed name",
        "ord": 1500,
        "enabled": true
      }
    })
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        assert.deepStrictEqual(data.updated, true);
      });
  });
});
