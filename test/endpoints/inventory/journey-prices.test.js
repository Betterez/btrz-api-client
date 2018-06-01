const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/journey-prices', () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all journey prices that match the provided query", () => {
    axiosMock.onGet(`/journey-prices`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.journeyPrices.all({
      jwtToken,
      token,
      query: {
        providerIds: "4eb9990bf7885e0100000001"
      }
    });
  });
});