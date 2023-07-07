const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/garages", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";
  const garageId = "637d56739a27aff80e99c300";
  const data = {
    name: "garage 1 Brc",
    location: "Terminal de Omnibus",
    stationId: "637d56739a27aff80e99c242",
    accountId: "52a377ec430c7d4e220001fc"
  };

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all the garages", () => {
    axiosMock.onGet("/garages").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.garages.all({token});
  });

  it("should get a garage", () => {
    axiosMock.onGet(`/garages/${garageId}`).reply(expectRequest({statusCode: 200, token}));
    return api.inventory.garages.get({token, garageId});
  });

  it("should create a garage", () => {
    axiosMock.onPost("/garages").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.garages.create({token, jwtToken, data});
  });

  it("should update a garage", () => {
    axiosMock.onPut(`/garages/${garageId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken, data
    }));
    return api.inventory.garages.update({token, jwtToken, garageId, data});
  });
});
