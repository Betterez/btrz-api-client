const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("accounts/accounts", () => {
  const jwtToken = "I owe you a JWT token";
  const token = "I owe you a token";

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

  it("should POST default users for an account", () => {
    const accountId = "account123";
    const data = {
      adminUserData: {
        email: "admin@example.com",
        password: "password"
      }
    };
    axiosMock.onPost(`/accounts/${accountId}/default-users`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: data
    }));
    return api.accounts.accounts.defaultUsers.create({
      token,
      jwtToken,
      accountId,
      data
    });
  });
});
