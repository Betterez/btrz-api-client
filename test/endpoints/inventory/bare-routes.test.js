const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/bare-routes", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get bare-routes", () => {
    axiosMock.onGet("/bare-routes", {
      params: {
        productIds: "1,2,3"
      }
    }).reply(expectRequest({
      statusCode: 200, token
    }));
    return api.inventory.bareRoutes.all({
      token,
      query: {
        productIds: "1,2,3"
      }
    });
  });

  it("should get route by id", () => {
    axiosMock.onGet("/bare-routes/1").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.bareRoutes.get({token, routeId: 1});
  });
});
