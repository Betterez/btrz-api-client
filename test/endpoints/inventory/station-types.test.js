const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/station-types", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should list station-types", () => {
    axiosMock.onGet("/station-types").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.stationTypes.all({token, jwtToken});
  });

  it("should get a station-types", () => {
    const stationTypeId = "123123123123";
    axiosMock.onGet(`/station-types/${stationTypeId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.stationTypes.get({token, jwtToken, stationTypeId});
  });

  it("should create a station-types", () => {
    axiosMock.onPost("/station-types").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.stationTypes.create({
      jwtToken,
      token,
      data: {
        name: "example",
        code: 20,
        ord: 100
      }
    });
  });

  it("should update a station-types", () => {
    const stationTypeId = "123123123123";
    const data = {
      name: "new",
      code: 100,
      ord: 10
    };
    axiosMock.onPut(`/station-types/${stationTypeId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.stationTypes.update({jwtToken, token, stationTypeId, data});
  });

  it("should delete a station-types", () => {
    const stationTypeId = "123123123123";
    axiosMock.onDelete(`/station-types/${stationTypeId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.stationTypes.remove({jwtToken, token, stationTypeId});
  });
});
