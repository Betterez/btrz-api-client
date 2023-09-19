const {expect} = require("chai");
const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/exchange-receipt-settings", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should PUT to ExchangeReceipts", () => {
    const data = {
      accountId: "123456789"
    };
    axiosMock.onPut("/exchange-receipt-settings").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.exchangeReceipts.update({
      token,
      jwtToken,
      data
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });
});
