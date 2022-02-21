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


  it("should create a Journey Pricing rule", () => {
    axiosMock.onPost(`/journey-prices`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.journeyPrices.create({
      jwtToken,
      token,
      journeyPrice: {
        price: '75000000',
        originId: '112312-123123-121321-13123',
        destinationId: '112312-123123-121321-13123'

      }
    });
  });

  it("should update a Journey Pricing rule", () => {
    const journeyPriceId = "5ad7804216b426412c19f06f";
    axiosMock.onPatch(`/journey-prices/${journeyPriceId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));

    return api.inventory.journeyPrices.update({
      jwtToken,
      token,
      journeyPriceId,
      "journeyPrice": {
        "price": "englishName",
      }
    });
  });


});
