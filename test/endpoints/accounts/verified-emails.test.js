const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/verified-emails", () => {
  const token = "someToken";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should get all verified emails", () => {
    const query = {page: 1, pageSize: 20};
    axiosMock.onGet("/verified-emails").reply(expectRequest({statusCode: 200, token, jwtToken, query}));
    return api.accounts.verifiedEmails.all({token, jwtToken, query});
  });

  it("should get verified email by email address", () => {
    const email = "user@example.com";
    axiosMock.onGet(`/verified-emails/${encodeURIComponent(email)}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.verifiedEmails.get({token, jwtToken, email});
  });
  it("should create a verified email", () => {
    const data = {email: "test@example.com", status: "WHITELISTED"};
    axiosMock.onPost("/verified-emails").reply(expectRequest({statusCode: 200, token, jwtToken, body: data}));
    return api.accounts.verifiedEmails.create({token, jwtToken, data});
  });

  it("should update a verified email", () => {
    const email = "user@example.com";
    const data = {status: "BLACKLISTED"};
    axiosMock.onPut(`/verified-emails/${encodeURIComponent(email)}`).reply(expectRequest({statusCode: 200, token, jwtToken, body: data}));
    return api.accounts.verifiedEmails.update({token, jwtToken, email, data});
  });
});
