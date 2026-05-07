const assert = require("node:assert/strict");
const port = process.env.BTRZPAY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    btrzpay: (baseUrl) => { return `${baseUrl}/btrz-pay`; }
  }
});

describe("btrz-pay/reference-numbers", () => {
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
        assert.deepStrictEqual(status, 200);
        assert.deepStrictEqual(data.referenceNumber.length, 8);
      });
  });
});
