const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("btrzpay/referenced-payments", () => {
  const token = "token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the referenced payment status", () => {
    const transactionId = "5ad7804216b426412c19f06f";
    const referenceNumber = "1234asdf";
    axiosMock.onGet(`/referenced-payments/${transactionId}/${referenceNumber}/status`).reply(expectRequest({
      statusCode: 200, token
    }));
    return api.btrzpay.referencedPayments.getStatus({
      jwtToken,
      token,
      transactionId,
      referenceNumber
    });
  });

  it("should update a referenced payment", () => {
    const externalType = "some_type";
    const referenceNumber = "asdf1234";
    axiosMock.onPost(`/referenced-payments/${externalType}/${referenceNumber}/results`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));

    return api.btrzpay.referencedPayments.update({
      jwtToken,
      token,
      externalType,
      referenceNumber,
      paymentResult: {
        "status": "success",
        "result": {
          "message": "paid manually"
        }
      }
    });
  });
});
