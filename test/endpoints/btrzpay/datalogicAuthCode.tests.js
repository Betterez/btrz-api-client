const {
  axiosMock, expectRequest
} = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({
  baseURL: "http://test.com"
});

describe("btrz-pay/datalogic/auth-code", () => {
  const internalAuthTokenProvider = {
    getToken: () => {
      return "internalToken";
    }
  };

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a Authorization code", () => {
    axiosMock.onGet("/datalogic/auth-code").reply(expectRequest({
      statusCode: 200,
      internalAuthTokenProvider,
      withoutApiKey: true,
      jwtToken: "internal_auth_token"
    }));

    return api.btrzpay.datalogic.authCode.get({
      internalAuthTokenProvider,
      jwtToken: "internal_auth_token"
    });
  });
});
