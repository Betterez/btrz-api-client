const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/amenities', () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list Amenities", function() {
    axiosMock.onGet(`/amenities`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.amenities.all({ token });
  });


  it("should get an Amenity", () => {
    const amenityId = "5ad7804216b426412c19f06f";
    axiosMock.onGet(`/amenities/${amenityId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.amenities.get({
      token,
      amenityId
    });
  });

  it("should create an Amenity", () => {
    axiosMock.onPost(`/amenities`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.amenities.create({
      jwtToken,
      token,
      amenity: {
        name: 'englishName',
        icon: 'fa-ship',
        enabled: 'true',
        lexiconValues: {
          "en-us": 'englishName',
          "fr-fr": 'frenchName',
          "nl-nl": 'netherlandName',
          "de-de": 'deutchName',
          "es-ar": 'spanishName'
        }
      }
    });
  });

  it("should update an Amenity", () => {
    const amenityId = "5ad7804216b426412c19f06f";
    axiosMock.onPut(`/amenities/${amenityId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));

    return api.inventory.amenities.update({
      jwtToken,
      token,
      amenityId,
      "update": {
        "name": "englishName",
        "icon": "testIcon",
        "enabled" : true,
        "lexiconValues": {
          "en-us": "englishName333",
          "es-ar": "spanishName333"
        }
      }
    });
  });
});
