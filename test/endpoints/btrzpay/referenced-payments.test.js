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
    axiosMock.onGet(`/referenced-payments/${transactionId}/status`).reply(expectRequest({
      statusCode: 200, token
    }));
    return api.btrzpay.referencedPayments.getStatus({
      jwtToken,
      token,
      transactionId
    });
  });
});
