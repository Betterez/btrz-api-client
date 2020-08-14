const {expect} = require("chai");
const port = process.env.BTRZPAY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const customerId = process.env.CUSTOMER_ID;
const customerCardId = process.env.CUSTOMER_CARD_ID;
const paymentMethodId = process.env.PAYMENT_METHOD_ID;
const providerPaymentProfileId = process.env.PROVIDER_PAYMENT_PROFILE_ID;
const api = require("../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    btrzpay: (baseUrl) => `${baseUrl}/btrz-pay`
  }
});

describe("btrz-pay/payment-methods/${paymentMethodId}/customers/${customerId}/customerCards", () => {
  it("should create a customer card", (done) => {
    const customerCard = {
      customerId,
      providerPaymentProfileId,
      maskedPAN: "4455",
      expiryDate: "07/2001",
      cardType: "visa",
      provider: "authorizeNet",
      isDefault: true
    };

    return api.btrzpay.customerCards.create({
      jwtToken,
      token,
      paymentMethodId,
      customerId,
      customerCard
    })
    .then(({status, data}) => {
      expect(status).to.equal(200);
      expect(data.customerId).to.eql(customerCard.customerId);
      expect(data.paymentMethodId).to.eql(paymentMethodId);
      expect(data.id).to.exist;
      done();
    })
    .catch((err)=> {
      done(err);
    });
  });

  it("should get a customer card", (done) => {
    return api.btrzpay.customerCards.get({
      jwtToken,
      token,
      paymentMethodId,
      customerId,
      customerCardId
    })
    .then(({status, data}) => {
      expect(status).to.equal(200);
      expect(data.customerCard.id).to.eql(customerCardId);
      expect(data.customerCard.providerPaymentProfileId).to.eql(providerPaymentProfileId);
      expect(data.customerCard.id).to.exist;
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  it("should get all customer cards", (done) => {
    return api.btrzpay.customerCards.all({
      jwtToken,
      token,
      paymentMethodId,
      customerId
    })
    .then(({status, data}) => {
      expect(status).to.equal(200);
      expect(data.customerCards.length).to.eql(2);
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  it("should delete a customer card", (done) => {
    return api.btrzpay.customerCards.remove({
      jwtToken,
      token,
      paymentMethodId,
      customerId,
      customerCardId
    })
    .then(({status, data}) => {
      expect(status).to.equal(200);
      expect(data.result).to.eql(1);
      done();
    })
    .catch((err)=> {
      done(err);
    });
  });
});
