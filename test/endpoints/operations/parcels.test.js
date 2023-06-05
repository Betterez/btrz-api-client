const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });
const expect = require("chai").expect;

describe('operations/parcels', function() {
  const token = 'I owe you a token';
  const jwtToken = 'I owe you a JWT token'
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should get a parcel by id", function() {
    const parcelId = "parcelId1";
    axiosMock.onGet(`/parcels/${parcelId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.operations.parcel.get({ token, id: parcelId });
  });

  it("should get all parcel by trxId", function() {
    const trxId = "trxId1";
    axiosMock.onGet(`/parcels`).reply(expectRequest({ statusCode: 200, token }));
    return api.operations.parcel.all({ token, query: { trxId: trxId }});
  });

  it("should add scan to parcel", function() {
    const parcelId = "parcelId1";
    axiosMock.onPost(`/parcels/${parcelId}/scans`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.operations.parcel.addScan({ jwtToken, token, id: parcelId, operationType: "deliver", locationData: {latitude: 0, longitude: 0} });
  });

  it("should add a comment to parcel", function() {
    const parcelId = "parcelId1";
    axiosMock.onPost(`/parcels/${parcelId}/user-comments`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.operations.parcel.addComment({ jwtToken, token, id: parcelId, comment: "A comment" });
  });

  it("should delete a comment from a parcel", () => {
    const parcelId = "parcelId1";
    const commentId = "commentId1";
    axiosMock.onDelete(`/parcels/${parcelId}/user-comments/${commentId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.operations.parcel.deleteComment({ jwtToken, token, id: parcelId, commentId });
  });
});
