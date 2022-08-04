const {
  axiosMock, expectRequest
} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/vehicles", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a vehicle", () => {
    axiosMock.onPost("/vehicles").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.vehicles.create({
      jwtToken,
      token,
      serviceType: {
        name: "My vehicle"
      }
    });
  });

  it("should get all vehicles", () => {
    axiosMock.onGet("/vehicles").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.vehicles.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a vehicle", () => {
    const vehicleId = "1234";
    axiosMock.onPut(`/vehicles/${vehicleId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.vehicles.update({
      jwtToken,
      token,
      vehicleId,
      serviceType: {
        name: "My Updated vehicle it"
      }
    });
  });

  it("should get a vehicle", () => {
    const vehicleId = "1234";
    axiosMock.onGet(`/vehicles/${vehicleId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.vehicles.get({
      jwtToken,
      token,
      vehicleId
    });
  });

  it("should delete a vehicle", () => {
    const vehicleId = "1234";
    axiosMock.onDelete(`/vehicles/${vehicleId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.vehicles.remove({
      jwtToken,
      token,
      vehicleId
    });
  });
});
