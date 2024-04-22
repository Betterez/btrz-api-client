const {
  axiosMock, expectRequest
} = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({
  baseURL: "http://test.com"
});

describe("btrz-pay/datalogic/payments", () => {
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
    axiosMock.onGet("/datalogic/payments").reply(expectRequest({
      statusCode: 200,
      internalAuthTokenProvider,
      withoutApiKey: true,
      jwtToken: "internal_auth_token",
      query: {referenceNumber}
    }));

    return api.btrzpay.datalogic.payments.all({
      internalAuthTokenProvider,
      jwtToken: "internal_auth_token",
      query: {referenceNumber}
    });
  });
});
