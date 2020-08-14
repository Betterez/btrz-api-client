const {expect} = require("chai");
const port = process.env.BTRZPAY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const customerId = process.env.CUSTOMER_ID;
const paymentMethodId = process.env.PAYMENT_METHOD_ID;
const providerCustomerProfileId = process.env.PROVIDER_CUSTOMER_PROFILE_ID;
const api = require("../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    btrzpay: (baseUrl) => `${baseUrl}/btrz-pay`
  }
});

describe("btrz-pay/payment-methods/${paymentMethodId}/customers", () => {
  it("should create a customer", (done) => {
    const customer = {
      customerId,
      providerCustomerProfileId
    };

    return api.btrzpay.customers.create({
      jwtToken,
      token,
      paymentMethodId,
      customer
    })
    .then(({status, data}) => {
      expect(status).to.equal(200);
      expect(data.customerId).to.eql(customer.customerId);
      expect(data.paymentMethodId).to.eql(paymentMethodId);
      expect(data.providerCustomerProfileId).to.exist;
      done();
    })
    .catch((err)=> {
      done(err);
    });
  });

  it("should get a customer", () => {
    return api.btrzpay.customers.get({
      jwtToken,
      token,
      paymentMethodId,
      customerId
    })
    .then(({status, data}) => {
      expect(status).to.equal(200);
      expect(data.customer.customerId).to.eql(customerId);
      done();
    })
    .catch((err)=> {
      done(err);
    });
  });

  it("should delete a customer", () => {
    return api.btrzpay.customers.remove({
      jwtToken,
      token,
      paymentMethodId,
      customerId
    })
    .then(({status, data}) => {
      expect(status).to.equal(200);
      expect(data.result).to.eql(1);
    })
    .catch((err)=> {
      done(err);
    });
  });
});
