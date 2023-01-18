const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("accounts/accounts", () => {
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET an account", () => {
    const accountId = "123123123123";
    const withoutApiKey = true;
    axiosMock.onGet(`/accounts/${accountId}`).reply(expectRequest({
      statusCode: 200, jwtToken, withoutApiKey
    }));
    return api.accounts.accounts.get({
      jwtToken,
      accountId
    });
  });
});
