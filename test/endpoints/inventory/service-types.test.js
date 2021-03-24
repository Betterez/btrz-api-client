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

  it("should create a payment terminal", () => {
    axiosMock.onPost("/service-types").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.serviceTypes.create({
      jwtToken,
      token,
      serviceType: {
        name: "My payment terminal"
      }
    });
  });

  it("should get all payment terminals", () => {
    axiosMock.onGet("/service-types").reply(expectRequest({statusCode: 200, token, jwtToken }));
    return api.inventory.serviceTypes.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a payment terminal", () => {
    const serviceTypeId = "1234";
    axiosMock.onPut(`/service-types/${serviceTypeId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.serviceTypes.update({
      jwtToken,
      token,
      serviceTypeId,
      serviceType: {
        name: "My Updated payment terminal it"
      }
    });
  });

  it("should get a payment terminal", () => {
    const serviceTypeId = "1234";
    axiosMock.onGet(`/service-types/${serviceTypeId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.serviceTypes.get({
      jwtToken,
      token,
      serviceTypeId
    });
  });

  it("should delete a payment terminal", () => {
    const serviceTypeId = "1234";
    axiosMock.onDelete(`/service-types/${serviceTypeId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.serviceTypes.remove({
      jwtToken,
      token,
      serviceTypeId
    });
  });
});
