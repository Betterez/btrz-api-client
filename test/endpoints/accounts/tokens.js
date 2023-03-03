const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("accounts/tokens", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get token", () => {
    const query = {
      key: "someKey",
      type: "someType"
    };
    axiosMock.onGet("/tokens", {params: query}).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.tokens.get({token, jwtToken, query});
  });

  it("should create a token", () => {
    const data = {
      key: "someKey",
      type: "someType"
    };
    axiosMock.onPost("/tokens").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.tokens.create({token, jwtToken, data});
  });
});
