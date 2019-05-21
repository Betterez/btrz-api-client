const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/bundles', () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all brands", () => {
    axiosMock.onGet("/bundles").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.bundles.all({
      jwtToken,
      token,
      query: {
        providerId: "4eb9990bf7885e0100000001"
      }
    });
  });
});