const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/route", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get route by id", () => {
    axiosMock.onGet("/route/1").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.routes.get({token, routeId: 1});
  });

  it("should get prices", () => {
    axiosMock.onGet("/routes/prices").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.routes.prices({token, productId: 1, originId: 1, destinationId: 1, channel: "backoffice"}, {});
  });

  it("should get all the routes", () => {
    axiosMock.onGet("/routes").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.routes.all({token});
  });
});
