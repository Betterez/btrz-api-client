const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("inventory/traveller-card-types", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list Traveller Card Types", () => {
    axiosMock.onGet("/traveller-card-types").reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.travellerCardTypes.all({ token });
  });


  it("should get an Traveller Card Types", () => {
    const travellerCardTypeId = "5ad7804216b426412c19f06f";
    axiosMock.onGet(`/traveller-card-types/${travellerCardTypeId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.travellerCardTypes.get({
      token,
      travellerCardTypeId
    });
  });

  it("should create a Traveller Card Types", () => {
    axiosMock.onPost("/traveller-card-types").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.travellerCardTypes.create({
      jwtToken,
      token,
      travellerCardType: {
        type: "custom",
        lexiconKeys: {}
      }
    });
  });

  it("should update a Traveller Card Types", () => {
    const travellerCardTypeId = "5ad7804216b426412c19f06f";
    axiosMock.onPut(`/traveller-card-types/${travellerCardTypeId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.travellerCardTypes.update({
      jwtToken,
      token,
      travellerCardTypeId,
      update: {
        lexiconKeys: {name: {key: "someKey"}}
      }
    });
  });

  it("should remove an Traveller Card Types", () => {
    const travellerCardTypeId = "5ad7804216b426412c19f06f";
    axiosMock.onDelete(`/traveller-card-types/${travellerCardTypeId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.travellerCardTypes.remove({
      token,
      travellerCardTypeId,
      jwtToken
    });
  });
});
