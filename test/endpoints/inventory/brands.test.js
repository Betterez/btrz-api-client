const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/brands', () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a brand", () => {
    axiosMock.onPost(`/brands`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.brands.create({
      jwtToken,
      token,
      brand: {
        name: "My Brandy",
        enabled: true
      }
    });
  });

  it("should get all brands", () => {
    axiosMock.onGet(`/brands`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.brands.all({
      jwtToken,
      token,
      query: {
        providerIds: "4eb9990bf7885e0100000001"
      }
    });
  });

  it("should update a brand", () => {
    const brandId = "1234";
    axiosMock.onPut(`/brands/${brandId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.brands.update({
      jwtToken,
      token,
      brandId,
      brand: {
        name: "My Updated Brandits",
        enabled: false
      }
    });
  });

  it("should get a brand", () => {
    const brandId = "1234";
    axiosMock.onGet(`/brands/${brandId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.brands.get({
      jwtToken,
      token,
      brandId
    });
  });
});
