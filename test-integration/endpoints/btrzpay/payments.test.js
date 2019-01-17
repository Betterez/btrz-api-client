const { expect } = require("chai"),
  port = process.env.BTRZPAY_API_PORT,
  token = process.env.API_TOKEN,
  jwtToken = process.env.JWT_TOKEN,
  transactionId = process.env.TRANSACTION_ID,
  api = require("./../../../src/client").createApiClient({
    baseURL: `http://localhost:${port}`,
    baseURLOverride: {
      btrzpay: (baseUrl) => `${baseUrl}/btrz-pay`
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
      expect(status).to.equal(200);
      expect(data.payments[0].transactionId).to.eql(payments.items[0].transactionId);
      expect(data.payments[0].status).to.eql("pending");
      expect(data.payments[0].result).to.eql("{}");
    });
  });

  it("should get the payments for the transaction Id", () => {
    return api.btrzpay.payments.get({
      jwtToken,
      token,
      transactionId
    })
    .then(({status, data}) => {
      expect(status).to.equal(200);
      expect(data.payments[0].transactionId).to.eql(transactionId);
    });
  });
});
