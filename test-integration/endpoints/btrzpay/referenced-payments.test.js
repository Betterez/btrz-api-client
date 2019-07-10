const {expect} = require("chai");
const port = process.env.BTRZPAY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const transactionId = process.env.TRANSACTION_ID;
const referenceNumber = process.env.REFERENCE_NUMBER;
const externalType = process.env.EXTERNAL_TYPE;
const api = require("./../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    btrzpay: (baseUrl) => {
      return `${baseUrl}/btrz-pay`;
    }
  }
});

describe("btrz-pay/referenced-payments", () => {
  it("should return status for the transactionId and referenceNumber", () => {
    return api.btrzpay.referencedPayments.getStatus({
      jwtToken,
      token,
      transactionId,
      referenceNumber
    })
      .then(({status, data}) => {
        expect(status).to.equal(200);
        expect(data.paymentResult).to.eql(null);
      });
  });

  it("should update a referenced payment", () => {
    return api.btrzpay.referencedPayments.update({
      jwtToken,
      token,
      externalType,
      referenceNumber,
      "paymentResult": {
        "status": "success",
        "result": {
          message: "paid manually"
        }
      }
    })
      .then(({status}) => {
        expect(status).to.equal(200);
      });
  });
});
