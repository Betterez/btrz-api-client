const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe.only('inventory/amenity-groups', () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list Amenity Groups", function() {
    axiosMock.onGet(`/amenity-groups`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.amenityGroups.all({ token });
  });


  it("should get an Amenity Group", () => {
    const amenityGroupId = "5ad7804216b426412c19f06f";
    axiosMock.onGet(`/amenity-groups/${amenityGroupId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.amenityGroups.get({
      token,
      amenityGroupId
    });
  });

  it("should create an Amenity Group", () => {
    axiosMock.onPost(`/amenity-groups`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.amenityGroups.create({
      jwtToken,
      token,
      amenity: {
        name: 'englishName',
        icon: 'fa-ship',
        enabled: 'true',
        lexiconKeys: {}
      }
    });
  });

  it("should update an Amenity Group", () => {
    const amenityGroupId = "5ad7804216b426412c19f06f";
    axiosMock.onPut(`/amenity-groups/${amenityGroupId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.amenityGroups.update({
      jwtToken,
      token,
      amenityGroupId,
      update: {
        name: "englishName",
        enabled : 'true',
        amenityIds: [],
        lexiconKeys: {}
      }
    });
  });
});
