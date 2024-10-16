const {
  axiosMock, expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("inventory/stations/provinces", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list zones", () => {
    axiosMock.onGet("/stations/provinces").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.stationsProvinces.all({
      token
    });
  });
});
