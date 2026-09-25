const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/trips", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list trips", () => {
    axiosMock.onGet("/trips").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.trips.all({token});
  });

  it("should get trip by id", () => {
    axiosMock.onGet("/trip/1").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.trips.get({token, id: 1});
  });

  it("should send includeFees when searching trips", () => {
    const query = {productId: "5a9f2082d1aba6a732ae918a", fareIds: "5a9f2060d1aba834217f5b5e:2", includeFees: true};
    axiosMock.onGet("/trips", {params: query}).reply(expectRequest({statusCode: 200, token}));
    return api.inventory.trips.all({token, query});
  });

  it("should send includeFees when getting a trip by id", () => {
    const query = {includeFees: true};
    axiosMock.onGet("/trip/1", {params: query}).reply(expectRequest({statusCode: 200, token}));
    return api.inventory.trips.get({token, id: 1, query});
  });

  it("should get pricing simulation", () => {
    const query = {scheduleId: "5a9f2060d1aba834217f5b5e", productId: "5a9f2082d1aba6a732ae918a"};
    axiosMock.onGet("/trips/pricing-simulation", {params: query}).reply(expectRequest({statusCode: 200, token}));
    return api.inventory.trips.getPricingSimulation({token, query});
  });
});
