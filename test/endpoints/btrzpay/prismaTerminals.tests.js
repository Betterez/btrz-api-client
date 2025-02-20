const {
  axiosMock, expectRequest
} = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({
  baseURL: "http://test.com"
});

describe("btrzpay/prisma-terminals", () => {
  const token = "token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the prisma terminal payment", () => {
    axiosMock.onGet("/prisma-terminals/payments/1").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.btrzpay.prismaTerminals.payments.get({
      token,
      jwtToken,
      id: 1
    });
  });

  it("should create a prisma terminal payment intent", () => {
    axiosMock.onPost("/prisma-terminals/payments").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.btrzpay.prismaTerminals.payments.create({
      token,
      jwtToken,
      prismaPayment: {
        terminalId: "1",
        amount: "12.45"
      }
    });
  });
});
