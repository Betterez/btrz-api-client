const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });
const expect = require("chai").expect;

describe('operations/parcel', function() {
  const token = 'I owe you a token';
  const jwtToken = 'I owe you a JWT token'
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should get a parcel by id", function() {
    const parcelId = "parcelId1";
    axiosMock.onGet(`/parcel/${parcelId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.operations.parcel.get({ token, id: parcelId });
  });

  it("should update parcel", function() {
    const parcelId = "parcelId1";
    axiosMock.onPut(`/parcel/${parcelId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.operations.parcel.update({ jwtToken, token, id: parcelId, parcel: { _id: parcelId }, locationData: {latitude: 0, longitude: 0} });
  });

}); 