const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/station-classes", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should list station-classes", () => {
    axiosMock.onGet("/station-classes").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.stationClasses.all({token, jwtToken});
  });

  it("should get a station-classes", () => {
    const stationClassId = "123123123123";
    axiosMock.onGet(`/station-classes/${stationClassId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.stationClasses.get({token, jwtToken, stationClassId});
  });

  it("should create a station-classes", () => {
    axiosMock.onPost("/station-classes").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.stationClasses.create({
      jwtToken,
      token,
      data: {
        name: "example",
        code: 20,
        ord: 100
      }
    });
  });

  it("should update a station-classes", () => {
    const stationClassId = "123123123123";
    const data = {
      name: "new",
      code: 100,
      ord: 10
    };
    axiosMock.onPut(`/station-classes/${stationClassId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.stationClasses.update({jwtToken, token, stationClassId, data});
  });

  it("should delete a station-classes", () => {
    const stationClassId = "123123123123";
    axiosMock.onDelete(`/station-classes/${stationClassId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.stationClasses.remove({jwtToken, token, stationClassId});
  });
});
