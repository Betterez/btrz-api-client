const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/route", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

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

  it("should create a route", () => {
    axiosMock.onPost("/routes").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.routes.create({
      jwtToken,
      token,
      data: {
        name: "12 - Burlington Carpool "
      }
    });
  });

  it("should get prices", () => {
    const routeId = "1";
    axiosMock.onGet(`/routes/${routeId}/stations`).reply(expectRequest({statusCode: 200, token}));
    return api.inventory.routes.stations({token, routeId});
  });

  it("should get a fare-table", () => {
    axiosMock.onGet("/routes/fare-tables").reply(expectRequest({
      statusCode: 200, token
    }));
    return api.inventory.routes.fareTables.all({
      token
    });
  });

  it("should create a fare-table", () => {
    const routeId = "1";
    const fareTable = {};
    axiosMock.onPost(`/routes/${routeId}/fare-tables`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.fareTables.create({
      jwtToken, token, routeId, fareTable
    });
  });

  it("should update a fare-table", () => {
    const routeId = "1";
    const fareTableId = "2";
    const fareTable = {};
    axiosMock.onPut(`/routes/${routeId}/fare-tables/${fareTableId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.fareTables.update({
      jwtToken, token, routeId, fareTableId, fareTable
    });
  });

  it("should create a stop", () => {
    const routeId = "11";
    const stop = {stopId: "22"};
    axiosMock.onPost(`/routes/${routeId}/stops`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.stops.create({
      token, jwtToken, routeId, stop
    });
  });

  it("should update a route", () => {
    const routeId = "507f1f77bcf86cd799439011";
    const data = {
      name: "Updated Route Name"
    };
    axiosMock.onPut(`/routes/${routeId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.update({
      token, jwtToken, routeId, data
    });
  });

  it("should delete a route", () => {
    const routeId = "507f1f77bcf86cd799439011";
    axiosMock.onDelete(`/routes/${routeId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.remove({
      token, jwtToken, routeId
    });
  });
});
