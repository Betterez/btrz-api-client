const {
  axiosMock, expectRequest
} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("btrzpay/prisma-terminals", () => {
  const token = "token";
  const jwtToken = "I owe you a JWT token";
  const query = {providerId: "123"};

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the prisma terminal payment", () => {
    axiosMock.onGet("/prisma-terminals/payments/1", {params: query}).reply(expectRequest({
      statusCode: 200, token, jwtToken, query
    }));
    return api.btrzpay.prismaTerminals.payments.get({
      token,
      jwtToken,
      query,
      id: 1
    });
  });

  it("should create a prisma terminal payment intent", () => {
    axiosMock.onPost("/prisma-terminals/payments").reply(expectRequest({
      statusCode: 200, token, jwtToken, query
    }));
    return api.btrzpay.prismaTerminals.payments.create({
      token,
      jwtToken,
      query,
      prismaPayment: {
        terminalId: "1",
        amount: "12.45"
      }
    });
  });

  it("should delete a prisma terminal payment intent", () => {
    axiosMock.onDelete("/prisma-terminals/payments/1").reply(expectRequest({
      statusCode: 200, token, jwtToken, query
    }));
    return api.btrzpay.prismaTerminals.payments.delete({
      token,
      jwtToken,
      query,
      id: 1
    });
  });

  it("should create a prisma terminal reversal intent", () => {
    axiosMock.onPost("/prisma-terminals/payments/1/reversals").reply(expectRequest({
      statusCode: 200, token, jwtToken, query
    }));
    return api.btrzpay.prismaTerminals.payments.reversals.create({
      token,
      jwtToken,
      id: 1,
      query,
      prismaReversal: {
        terminalId: "1",
        amount: "12.45"
      }
    });
  });

  it("should get the prisma terminal reversal", () => {
    axiosMock.onGet("/prisma-terminals/reversals/1", {params: query}).reply(expectRequest({
      statusCode: 200, token, jwtToken, query
    }));
    return api.btrzpay.prismaTerminals.payments.reversals.get({
      token,
      jwtToken,
      query,
      id: 1
    });
  });

  it("should delete a prisma terminal reversal intent", () => {
    axiosMock.onDelete("/prisma-terminals/reversals/1").reply(expectRequest({
      statusCode: 200, token, jwtToken, query
    }));
    return api.btrzpay.prismaTerminals.payments.reversals.delete({
      token,
      jwtToken,
      query,
      id: 1
    });
  });

  it("should create a prisma terminal settlement intent", () => {
    axiosMock.onPost("/prisma-terminals/settlements").reply(expectRequest({
      statusCode: 200, token, jwtToken, query
    }));
    return api.btrzpay.prismaTerminals.settlements.create({
      token,
      jwtToken,
      id: 1,
      query,
      settlement: {
        terminalId: "1"
      }
    });
  });
});
