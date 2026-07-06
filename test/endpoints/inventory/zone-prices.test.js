const {
  axiosMock, expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/zone-prices", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a zone price", () => {
    axiosMock.onPost("/zone-prices").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.zonePrices.create({
      jwtToken,
      token,
      zonePrice: {
        name: "My zone price here"
      }
    });
  });

  it("should get all zone prices", () => {
    axiosMock.onGet("/zone-prices").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.zonePrices.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a zone price", () => {
    const zonePriceId = "1234";
    axiosMock.onPut(`/zone-prices/${zonePriceId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.zonePrices.update({
      jwtToken,
      token,
      zonePriceId,
      zonePrice: {
        name: "My Updated zone price it"
      }
    });
  });

  it("should get a zone price", () => {
    const zonePriceId = "1234";
    axiosMock.onGet(`/zone-prices/${zonePriceId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.zonePrices.get({
      jwtToken,
      token,
      zonePriceId
    });
  });

  it("should delete a zone price", () => {
    const zonePriceId = "1234";
    axiosMock.onDelete(`/zone-prices/${zonePriceId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.zonePrices.remove({
      jwtToken,
      token,
      zonePriceId
    });
  });

  it("should get zone prices for parcels", () => {
    const payload = {
      providerId: "provider1",
      originId: "origin1",
      destinationId: "destination1",
      productId: "product1"
    };
    axiosMock.onPost("/zone-prices-for-parcels").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.zonePrices.forParcels({
      jwtToken,
      token,
      payload
    });
  });
});
