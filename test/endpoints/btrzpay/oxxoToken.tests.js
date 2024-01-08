const {
  axiosMock, expectRequest
} = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({
  baseURL: "http://test.com"
});

describe("btrz-pay/oxxo/token", () => {
  const internalAuthTokenProvider = {
    getToken: () => {
      return "internalToken";
    }
  };

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a new token", () => {
    axiosMock.onGet("/oxxo/token").reply(expectRequest({
      statusCode: 200,
      internalAuthTokenProvider,
      withoutApiKey: true,
      jwtToken: "internal_auth_token"
    }));

    return api.btrzpay.oxxo.token.get({
      internalAuthTokenProvider,
      jwtToken: "internal_auth_token"
    });
  });
});
