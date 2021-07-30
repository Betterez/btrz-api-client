const {
  axiosMock, expectRequest
} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/zone-price-overages", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a zone price", () => {
    axiosMock.onPost("/zone-price-overages").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.zonePriceOverages.create({
      jwtToken,
      token,
      zonePrice: {
        name: "My zone price"
      }
    });
  });

  it("should get all zone prices", () => {
    axiosMock.onGet("/zone-price-overages").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.zonePriceOverages.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a zone price", () => {
    const zonePriceId = "1234";
    axiosMock.onPut(`/zone-price-overages/${zonePriceId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.zonePriceOverages.update({
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
    axiosMock.onGet(`/zone-price-overages/${zonePriceId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.zonePriceOverages.get({
      jwtToken,
      token,
      zonePriceId
    });
  });

  it("should delete a zone price", () => {
    const zonePriceId = "1234";
    axiosMock.onDelete(`/zone-price-overages/${zonePriceId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.zonePriceOverages.remove({
      jwtToken,
      token,
      zonePriceId
    });
  });
});
