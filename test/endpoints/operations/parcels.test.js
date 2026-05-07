const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("operations/parcels", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a parcel by id", () => {
    const parcelId = "parcelId1";
    axiosMock.onGet(`/parcels/${parcelId}`).reply(expectRequest({statusCode: 200, token}));
    return api.operations.parcel.get({token, id: parcelId});
  });

  it("should get all parcel by trxId", () => {
    const trxId = "trxId1";
    axiosMock.onGet("/parcels").reply(expectRequest({statusCode: 200, token}));
    return api.operations.parcel.all({token, query: {trxId}});
  });

  it("should add scan to parcel", () => {
    const parcelId = "parcelId1";
    axiosMock.onPost(`/parcels/${parcelId}/scans`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.parcel.addScan({
      jwtToken,
      token,
      id: parcelId,
      operationType: "deliver",
      locationData: {latitude: 0, longitude: 0}
    });
  });

  it("should add a comment to parcel", () => {
    const parcelId = "parcelId1";
    axiosMock.onPost(`/parcels/${parcelId}/user-comments`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.parcel.addComment({jwtToken, token, id: parcelId, comment: "A comment"});
  });

  it("should delete a comment from a parcel", () => {
    const parcelId = "parcelId1";
    const commentId = "commentId1";
    axiosMock.onDelete(`/parcels/${parcelId}/user-comments/${commentId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.parcel.deleteComment({jwtToken, token, id: parcelId, commentId});
  });
});
