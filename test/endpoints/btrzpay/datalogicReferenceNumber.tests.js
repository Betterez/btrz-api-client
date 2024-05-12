const {
  axiosMock, expectRequest
} = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({
  baseURL: "http://test.com"
});

describe("btrz-pay/datalogic/reference-number", () => {
  const internalAuthTokenProvider = {
    getToken: () => {
      return "internalToken";
    }
  };

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a reference number", () => {
    axiosMock.onGet("/datalogic/reference-number").reply(expectRequest({
      statusCode: 200,
      internalAuthTokenProvider,
      withoutApiKey: true,
      jwtToken: "internal_auth_token"
    }));

    return api.btrzpay.datalogic.referenceNumber.get({
      internalAuthTokenProvider,
      jwtToken: "internal_auth_token"
    });
  });
});
