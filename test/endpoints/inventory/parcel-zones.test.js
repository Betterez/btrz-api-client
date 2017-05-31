const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/parcel-zones', () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list parcel zones", () => {
    axiosMock.onGet(`/parcel-zones`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.parcelZones.all({ token });
  });

  it("should create parcel zones", () => {
    axiosMock.onPost(`/parcel-zones`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.parcelZones.create({ jwtToken, token, parcelZone: { productId: "6789" } });
  });

  it("should update a parcel zone", () => {
    const parcelZoneId = "1234";
    axiosMock.onPut(`/parcel-zone/${parcelZoneId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.parcelZones.update({ jwtToken, token, parcelZoneId, parcelZone: { productId: "6789" } });
  });

});