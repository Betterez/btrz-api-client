const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("inventory/traveller-card-providers", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list Traveller Card Providerss", () => {
    axiosMock.onGet("/traveller-card-providers").reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.travellerCardProviders.all({ token });
  });


  it("should get an Traveller Card Providers", () => {
    const travellerCardProviderId = "5ad7804216b426412c19f06f";
    axiosMock.onGet(`/traveller-card-providers/${travellerCardProviderId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.travellerCardProviders.get({
      token,
      travellerCardProviderId
    });
  });

  it("should create a Traveller Card Providers", () => {
    axiosMock.onPost("/traveller-card-providers").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.travellerCardProviders.create({
      jwtToken,
      token,
      travellerCardProvider: {
        type: "custom",
        lexiconKeys: {}
      }
    });
  });

  it("should update a Traveller Card Providers", () => {
    const travellerCardProviderId = "5ad7804216b426412c19f06f";
    axiosMock.onPut(`/traveller-card-providers/${travellerCardProviderId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.travellerCardProviders.update({
      jwtToken,
      token,
      travellerCardProviderId,
      update: {
        lexiconKeys: {name: {key: "someKey"}}
      }
    });
  });
});
