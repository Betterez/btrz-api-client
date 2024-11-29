describe("inventory/travel-routes", () => {
  const {
    axiosMock, expectRequest
  } = require("./../../test-helpers");
  const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a travelRoute", () => {
    axiosMock.onPost("/travel-routes").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.travelRoutes.create({
      jwtToken,
      token,
      travelRoute: {
        name: "My vehicle"
      }
    });
  });

  it("should get all travelRoutes", () => {
    axiosMock.onGet("/travel-routes").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.travelRoutes.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a travelRoute", () => {
    const travelRouteId = "1234";
    axiosMock.onPut(`/travel-routes/${travelRouteId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.travelRoutes.update({
      jwtToken,
      token,
      travelRouteId,
      travelRoute: {
        name: "My Updated vehicle it"
      }
    });
  });

  it("should get a travelRoute", () => {
    const travelRouteId = "1234";
    axiosMock.onGet(`/travel-routes/${travelRouteId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.travelRoutes.get({
      jwtToken,
      token,
      travelRouteId
    });
  });
});
