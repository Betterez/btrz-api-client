const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/regions", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should list regions", () => {
    axiosMock.onGet("/regions").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.regions.all({token, jwtToken});
  });

  it("should get a region", () => {
    const regionId = "123123123123";
    axiosMock.onGet(`/regions/${regionId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.regions.get({token, jwtToken, regionId});
  });

  it("should create a region", () => {
    axiosMock.onPost("/regions").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.regions.create({
      jwtToken,
      token,
      data: {
        name: "North",
        enabled: true
      }
    });
  });

  it("should update a region", () => {
    const regionId = "123123123123";
    const data = {
      name: "North",
      enabled: false
    };
    axiosMock.onPut(`/regions/${regionId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.regions.update({jwtToken, token, regionId, data});
  });

  it("should delete a region", () => {
    const regionId = "123123123123";
    axiosMock.onDelete(`/regions/${regionId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.regions.remove({jwtToken, token, regionId});
  });
});
