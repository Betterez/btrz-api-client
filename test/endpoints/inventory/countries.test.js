const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/countries", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should list countries", () => {
    axiosMock.onGet("/countries").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.countries.all({token});
  });

  it("should get a country by id", () => {
    const countryId = "countryId";
    axiosMock.onGet(`/countries/${countryId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.countries.get({id: countryId, token, jwtToken});
  });

  it("should get a country by id and support query parameters", () => {
    const countryId = "countryId";
    const query = {param1: "value1"};

    axiosMock.onGet(`/countries/${countryId}?param1=value1`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.countries.get({id: countryId, query, token, jwtToken});
  });
});
