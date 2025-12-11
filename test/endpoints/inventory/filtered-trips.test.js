const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/filtered-trips", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list filtered trips", () => {
    axiosMock.onGet("/filtered-trips").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.filteredTrips.all({token});
  });

  it("should list filtered trips with query parameters", () => {
    const query = {
      origin: "A",
      destination: "B",
      productId: "product123"
    };
    axiosMock.onGet("/filtered-trips", {params: query}).reply(expectRequest({statusCode: 200, token}));
    return api.inventory.filteredTrips.all({token, query});
  });

  it("should create a filter trip", () => {
    axiosMock.onPost("/filtered-trips").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.filteredTrips.create({token, jwtToken, tripSegmentsId: "myTripSegmentId"});
  });
});
