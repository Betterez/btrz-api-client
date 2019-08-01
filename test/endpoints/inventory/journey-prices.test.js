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

  it("should get journey price by id", () => {
    axiosMock.onGet("/journey-prices/1").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.journeyPrices.get({
      jwtToken,
      token,
      id: 1
    });
  });

  it("should delete the journey price with the specified ID", () => {
    const id = "1234567890";
    axiosMock.onDelete(`/journey-prices/${id}`).reply(expectRequest({ statusCode: 204, token, jwtToken }));
    return api.inventory.journeyPrices.deleteById({
      jwtToken,
      token,
      id
    });
  });
});
