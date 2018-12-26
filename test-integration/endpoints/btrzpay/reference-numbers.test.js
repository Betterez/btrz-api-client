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

describe("btrz-pay/reference-numbers", function() {
  it("should create a reference number", () => {
    const referenceNumberRequest = {
      "type": "pay_me_later",
      "params": {
        "transactionId": "transactionId",
        "dateTime": "dateTime",
        "amount": 100,
        "amountToDisplay": "100",
        "currency": "MEX",
        "userId": "userId"
      }
    };

    return api.btrzpay.referenceNumbers.create({
      jwtToken,
      token,
      referenceNumberRequest
    })
    .then(({status, data}) => {
      expect(status).to.equal(200);
      expect(data.referenceNumber.length).to.eql(8);
    });
  });
});
