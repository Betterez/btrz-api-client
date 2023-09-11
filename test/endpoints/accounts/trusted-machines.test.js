const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("accounts/trusted-machines", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should return a single trusted-machines", () => {
    const id = "12312312312312";
    axiosMock.onGet(`/trusted-machines/${id}`)
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.trustedMachines.get({token, jwtToken, query: {}, id});
  });

  it("should get all trusted-machines", () => {
    const query = {};
    axiosMock.onGet("/trusted-machines").reply(expectRequest({statusCode: 200, token, jwtToken, query}));
    return api.accounts.trustedMachines.all({token, jwtToken, query});
  });
});
