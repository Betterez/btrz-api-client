const {
  axiosMock, expectRequest
} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("btrzpay/stripe-terminals", () => {
  const token = "token";
  const jwtToken = "I owe you a JWT token";
  const query = {providerId: "123"};

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all Stripe terminal", () => {
    axiosMock.onGet("/stripe-terminals", {params: query}).reply(expectRequest({
      statusCode: 200, token, jwtToken, query
    }));
    return api.btrzpay.stripeTerminals.all({
      token,
      jwtToken,
      query
    });
  });

  it("should simulate a stripe terminal payment", () => {
    const data = {ccNumber: "4242424242424242"};
    const terminalId = "tm_123";
    axiosMock.onPost(`/stripe-terminals/${terminalId}/simulate`).reply(expectRequest({
      statusCode: 200, token, jwtToken, data
    }));
    return api.btrzpay.stripeTerminals.simulate({
      id: terminalId,
      token,
      jwtToken,
      data: {
        stripePayment: data
      }
    });
  });
});
