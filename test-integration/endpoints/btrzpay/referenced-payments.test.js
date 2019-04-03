const {expect} = require("chai");
const port = process.env.BTRZPAY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const transactionId = process.env.TRANSACTION_ID;
const api = require("./../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    btrzpay: (baseUrl) => {
      return `${baseUrl}/btrz-pay`;
    }
  }
});

describe("btrz-pay/referenced-payments", () => {
  it("should return a null status for the transaction Id", () => {
    return api.btrzpay.referencedPayments.getStatus({
      jwtToken,
      token,
      transactionId
    })
      .then(({status, data}) => {
        expect(status).to.equal(200);
        expect(data.status).to.eql(null);
      });
  });
});
