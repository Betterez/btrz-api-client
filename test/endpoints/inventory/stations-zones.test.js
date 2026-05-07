const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/stations/zones", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list zones", () => {
    axiosMock.onGet("/stations/zones").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.stationsZones.get({token});
  });
});
