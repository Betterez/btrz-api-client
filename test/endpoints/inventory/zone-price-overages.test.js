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

  it("should create a zone price overage", () => {
    axiosMock.onPost("/zone-price-overages").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.zonePriceOverages.create({
      jwtToken,
      token,
      zonePriceOverages: {
        name: "My zone price"
      }
    });
  });

  it("should get all zone price overages", () => {
    axiosMock.onGet("/zone-price-overages").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.zonePriceOverages.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a zone price overage", () => {
    const zonePriceOverageId = "1234";
    axiosMock.onPut(`/zone-price-overages/${zonePriceOverageId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.zonePriceOverages.update({
      jwtToken,
      token,
      zonePriceOverageId,
      zonePriceOverages: {
        name: "My Updated zone price it"
      }
    });
  });

  it("should get a zone price overages", () => {
    const zonePriceOverageId = "1234";
    axiosMock.onGet(`/zone-price-overages/${zonePriceOverageId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.zonePriceOverages.get({
      jwtToken,
      token,
      zonePriceOverageId
    });
  });

  it("should delete a zone price overages", () => {
    const zonePriceOverageId = "1234";
    axiosMock.onDelete(`/zone-price-overages/${zonePriceOverageId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.zonePriceOverages.remove({
      jwtToken,
      token,
      zonePriceOverageId
    });
  });
});
