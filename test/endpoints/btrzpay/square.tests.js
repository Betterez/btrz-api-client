const {
  axiosMock, expectRequest
} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({
  baseURL: "http://test.com"
});

describe("btrzpay/square-", () => {
  const token = "token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should process a webhooks from square", () => {
    const providerId = "5ad7804216b426412c19f06f";
    axiosMock.onPost(`/square-webhooks/${providerId}`)
      .reply(expectRequest({
        statusCode: 200, token, jwtToken
      }));
    return api.btrzpay.squareWebhooks.create({
      providerId,
      jwtToken,
      token,
      data: {
        "merchant_id": "1CBDEFAAAA2YB",
        "type": "terminal.checkout.updated",
        "event_id": "string",
        "created_at": "2021-01-19T21:19:07.65Z",
        "data": {}
      }
    });
  });

  it("should get the square terminals", () => {
    axiosMock.onGet("/square-terminals").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.btrzpay.squareTerminals.get({
      token,
      jwtToken
    });
  });
});
