const {
  axiosMock, expectRequest
} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/service-numbers", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a service number", () => {
    axiosMock.onPost("/service-numbers").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.serviceNumbers.create({
      jwtToken,
      token,
      serviceNumber: {
        name: "My service numbery",
        enabled: true
      }
    });
  });

  it("should get all service numbers", () => {
    axiosMock.onGet("/service-numbers").reply(expectRequest({statusCode: 200, token, jwtToken }));
    return api.inventory.serviceNumbers.all({
      jwtToken,
      token,
      query: {
        providerIds: "4eb9990bf7885e0100000001"
      }
    });
  });

  it("should update a service number", () => {
    const serviceNumberId = "1234";
    axiosMock.onPut(`/service-numbers/${serviceNumberId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.serviceNumbers.update({
      jwtToken,
      token,
      serviceNumberId,
      serviceNumber: {
        name: "My Updated service number it",
        enabled: false
      }
    });
  });

  it("should get a service number", () => {
    const serviceNumberId = "1234";
    axiosMock.onGet(`/service-numbers/${serviceNumberId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.serviceNumbers.get({
      jwtToken,
      token,
      serviceNumberId
    });
  });
});
