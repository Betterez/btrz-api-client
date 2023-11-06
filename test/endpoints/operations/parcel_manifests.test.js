const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("operations/parcels-manifests", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should list providers", () => {
    const query = {externalId: "123123123123"};
    axiosMock.onGet("/parcels-manifests").reply(expectRequest({statusCode: 200, token, jwtToken, query}));
    return api.operations.parcelManifests.all({token, jwtToken, query});
  });


  it("should return a single parcels-manifests", () => {
    const id = "12312312312312";
    axiosMock.onGet(`/parcels-manifests/${id}`)
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.operations.parcelManifests.get({token, jwtToken, query: {}, id});
  });

  it("should create a parcels-manifests", () => {
    axiosMock.onPost("/parcels-manifests").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.parcelManifests.create({
      jwtToken,
      token,
      data: {
        externalId: "123123123213"
      }
    });
  });

  // it("should update a parcels-manifests", () => {
  //   const passengerCheckInInfoId = "123123123123";
  //   const data = {
  //     information: {firstName: "name"}
  //   };
  //   axiosMock.onPut(`/parcels-manifests/${passengerCheckInInfoId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
  //   return api.operations.passengerCheckInInfo.update({jwtToken, token, id: passengerCheckInInfoId, data});
  // });

  it("should remove a parcel from a parcel manifest", () => {
    const manifestId = "123123123213";
    const parcelId = "123123";
    axiosMock.onDelete(`/parcels-manifests/${manifestId}/parcels/${parcelId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.parcelManifests.parcels.remove({
      jwtToken,
      token,
      manifestId,
      parcelId
    });
  });

  it("should add a parcel from a parcel manifest", () => {
    const manifestId = "123123123213";
    const data = {
      parcels: [1, 2, 3],
      overrideOAndD: []
    };

    axiosMock.onPost(`/parcels-manifests/${manifestId}/parcels`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.parcelManifests.parcels.create({
      jwtToken,
      token,
      manifestId,
      data
    });
  });

  it("should add a vehicle to a parcel manifest", () => {
    const manifestId = "123123123213";
    const data = {
      vehicleId: 1
    };

    axiosMock.onPost(`/parcels-manifests/${manifestId}/vehicles`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.parcelManifests.vehicles.createOrUpdate({
      jwtToken,
      token,
      manifestId,
      data
    });
  });

  //parcels-manifests
});
