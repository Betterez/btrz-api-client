const {
  axiosMock, expectRequest
} = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({
  baseURL: "http://test.com"
});

describe("btrz-pay/oxxo/payments", () => {
  const oxxoToken = "OXXO_1234567890";
  const referenceNumber = "1234-1234-1234-1234";
  const internalAuthTokenProvider = {
    getToken: () => {
      return "internalToken";
    }
  };

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a list of payments", () => {
    axiosMock.onGet(`/oxxo/${oxxoToken}/payments`).reply(expectRequest({
      statusCode: 200,
      internalAuthTokenProvider,
      withoutApiKey: true,
      jwtToken: "internal_auth_token",
      query: {referenceNumber}
    }));

    return api.btrzpay.oxxo.payments.all({
      internalAuthTokenProvider,
      jwtToken: "internal_auth_token",
      oxxoToken,
      query: {referenceNumber}
    });
  });
});
