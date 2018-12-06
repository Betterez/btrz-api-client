const { expect } = require("chai"),
  port = process.env.BTRZPAY_API_PORT,
  token = process.env.API_TOKEN,
  jwtToken = process.env.JWT_TOKEN,
  api = require("./../../../src/client").createApiClient({
    baseURL: `http://localhost:${port}`,
    baseURLOverride: {
      btrzpay: (baseUrl) => `${baseUrl}/btrz-pay`
    }
  });

describe("btrz-pay/payment-methods", function() {
  it("should return empty success", function() {
    const providerName = "anyName";
    return api.btrzpay.paymentMethods.getByProviderName({ token, jwtToken, providerName })
      .then((result) => {
        expect(result.status).to.be.eql(200);
        expect(result.data.paymentMethods).to.be.eql([]);
      });
  });
});
