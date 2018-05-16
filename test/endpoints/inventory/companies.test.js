const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/companies', () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all companies", () => {
    axiosMock.onGet(`/companies`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.companies.all({
      jwtToken,
      token,
      query: {
        term: "someTerm"
      }
    });
  });
});
