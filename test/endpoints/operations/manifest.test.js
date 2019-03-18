const { axiosMock, expectRequest } = require("./../../test-helpers"),
  api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("operations/manifest", () => {
  const token = "I owe you a token",
    jwtToken = "I owe you a JWT token",
    providerId = "providerId";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a manifest by routeId, scheduleId and date", () => {
    const query = {
      providerId,
      routeId: "2349283409238429348",
      scheduleId: "abc",
      date: "2017-10-10"
    };
    axiosMock.onGet("/manifests").reply(expectRequest({ statusCode: 200, token }));
    return api.operations.manifest.get({ token, jwtToken, query });
  });

  it("should get a manifest by manifestId", () => {
    const manifestId = "manifestId";
    axiosMock.onGet(`/manifests/${manifestId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.operations.manifest.getById({ token, jwtToken, manifestId });
  });

  it("should get many manifests", () => {
    const data = {
      query: [{
        routeId: "2349283409238429348",
        scheduleId: "abc",
        date: "2019-10-10"
      }]
    };
    axiosMock.onPost("/all-manifests").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.manifest.getAll({token, jwtToken, providerId, data});
  });

  it("should get outlook manifests", () => {
    const query = {
      providerId,
      productId: "productId",
      date: "2018-01-01"
    };
    axiosMock.onGet("/outlook-manifests").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.operations.manifest.outlook({ token, jwtToken, query });
  });

  it("should patch a manifest", () => {
    axiosMock.onPatch("/manifests").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.operations.manifest.patch({ token, jwtToken, query: {providerId}, operations: {op: "add_tickets", tickets: []} });
  });

  it("should save a manifest", () => {
    const data = {
      manifestId: "manifestId",
      comments: "This is a comment!",
      capacity: 22
    };
    axiosMock.onPut("/manifests").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.operations.manifest.save({ token, jwtToken, providerId, data });
  });
});
