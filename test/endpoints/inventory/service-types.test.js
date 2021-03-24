const {
  axiosMock, expectRequest
} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/service-types", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a service type", () => {
    axiosMock.onPost("/service-types").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.serviceTypes.create({
      jwtToken,
      token,
      serviceType: {
        name: "My service type"
      }
    });
  });

  it("should get all service types", () => {
    axiosMock.onGet("/service-types").reply(expectRequest({statusCode: 200, token, jwtToken }));
    return api.inventory.serviceTypes.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a service type", () => {
    const serviceTypeId = "1234";
    axiosMock.onPut(`/service-types/${serviceTypeId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.serviceTypes.update({
      jwtToken,
      token,
      serviceTypeId,
      serviceType: {
        name: "My Updated service type it"
      }
    });
  });

  it("should get a service type", () => {
    const serviceTypeId = "1234";
    axiosMock.onGet(`/service-types/${serviceTypeId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.serviceTypes.get({
      jwtToken,
      token,
      serviceTypeId
    });
  });

  it("should delete a service type", () => {
    const serviceTypeId = "1234";
    axiosMock.onDelete(`/service-types/${serviceTypeId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.serviceTypes.remove({
      jwtToken,
      token,
      serviceTypeId
    });
  });
});
