const { axiosMock, expectRequest } = require("./../../test-helpers"),
  api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("btrzpay/payments", () => {
  const token = "token",
    jwtToken = 'I owe you a JWT token';

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create payments", () => {
    axiosMock.onPost("/payments").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.btrzpay.payments.create({
      jwtToken,
      token,
      payments: [{
        result: "success",
        amount: 100
      }]
    });
  });

  it("should get the payments", () => {
    const transactionId = "5ad7804216b426412c19f06f";
    axiosMock.onGet(`/transactions/${transactionId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.btrzpay.payments.get({
      token,
      transactionId
    });
  });
});
