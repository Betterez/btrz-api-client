const {
  axiosMock, expectRequest
} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("btrzpay/cardpointe-terminals", () => {
  const token = "token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the carpointe terminals", () => {
    axiosMock.onGet("/cardpointe-terminals").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.btrzpay.cardpointeTerminals.all({
      token,
      jwtToken
    });
  });

  it("should readCard statud", () => {
    axiosMock.onGet("/cardpointe-terminals/read-card/1").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.btrzpay.cardpointeTerminals.readCard.get({
      token,
      jwtToken,
      readCardResultId: 1
    });
  });

  it("should start the readCard process", () => {
    axiosMock.onPost("/cardpointe-terminals/read-card").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.btrzpay.cardpointeTerminals.readCard.create({
      token,
      jwtToken,
      readCard: {
        terminalId: "1",
        merchantId: "2",
        amount: "12.45"
      }
    });
  });

  it("should call DELETE to reset a connection", () => {
    axiosMock.onDelete("/cardpointe-terminals/1/2").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.btrzpay.cardpointeTerminals.remove({
      token,
      jwtToken,
      merchantId: 1,
      terminalId: 2
    });
  });

  it("should ping a terminal", () => {
    axiosMock.onPost("/cardpointe-terminals/ping").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.btrzpay.cardpointeTerminals.ping.create({
      token,
      jwtToken,
      ping: {
        merchantId: 1,
        terminalId: 2
      }
    });
  });
});
