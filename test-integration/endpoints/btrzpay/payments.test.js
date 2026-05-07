const assert = require("node:assert/strict");
const port = process.env.BTRZPAY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const transactionId = process.env.TRANSACTION_ID;
const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    btrzpay: (baseUrl) => { return `${baseUrl}/btrz-pay`; }
  }
});

describe("btrz-pay/payments", () => {
  it("should create a payment method", () => {
    const payments = {
      items: [{
        "transactionId": "transactionId",
        "accountId": "accountId",
        "paymentMethodId": "65daebe8-3779-402b-b11b-5107bcf1e1ce",
        "amount": 100,
        "referenceNumber": "asdf1234"
      }]
    };

    return api.btrzpay.payments.create({
      jwtToken,
      token,
      payments
    })
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        assert.deepStrictEqual(data.payments[0].transactionId, payments.items[0].transactionId);
        assert.deepStrictEqual(data.payments[0].status, "pending");
        assert.deepStrictEqual(data.payments[0].result, "{}");
      });
  });

  it("should get the payments for the transaction Id", () => {
    return api.btrzpay.payments.get({
      jwtToken,
      token,
      transactionId
    })
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        assert.deepStrictEqual(data.payments[0].transactionId, transactionId);
      });
  });
});
