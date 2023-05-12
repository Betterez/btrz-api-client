const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/stations", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list stations", () => {
    axiosMock.onGet("/stations").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.stations.all({token});
  });

  it("should create a station", () => {
    axiosMock.onPost("/stations").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.stations.create({
      jwtToken,
      token,
      data: {
        name: "Bera"
      }
    });
  });
});
