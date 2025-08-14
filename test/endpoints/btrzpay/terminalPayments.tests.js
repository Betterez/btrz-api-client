const {
  axiosMock, expectRequest
} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("btrzpay/terminal-payments", () => {
  const token = "token";
  const jwtToken = "I owe you a JWT token";
  const query = {providerId: "123"};

  afterEach(() => {
    axiosMock.reset();
  });

  it("should update a MIT terminal payment", () => {
    axiosMock.onPut("/terminal-payments/mit/1").reply(expectRequest({
      statusCode: 200, token, jwtToken, query
    }));
    return api.btrzpay.terminalPayments.mit.update({
      token,
      jwtToken,
      query,
      id: 1,
      terminalPayment: {
        referenceNumber: "1",
        result: {
          id: "1",
          paymentStatus: "CONFIRMED"
        }
      }
    });
  });
});
