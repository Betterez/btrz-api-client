describe("accounts/shifts", () => {
  const {
    axiosMock,
    expectRequest
  } = require("./../../test-helpers.js");
  const api = require("./../../../src/client.js").createApiClient({
    baseURL: "http://test.com"
  });

  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all shifts", () => {
    const query = {status: "closed"};
    axiosMock.onGet("/shifts").reply(expectRequest({statusCode: 200, token, jwtToken, query}));
    return api.accounts.shifts.all({token, jwtToken, query});
  });

  it("should get shift", () => {
    const userId = "userId1";
    axiosMock.onGet(`/shift/user/${userId}`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.get({token, userId});
  });

  it("should create the shift", () => {
    const shiftData = {};
    axiosMock.onPost("/shifts").reply(expectRequest({statusCode: 200, token, jwtToken, body: shiftData}));
    return api.accounts.shifts.create({
      jwtToken,
      token,
      shiftData
    });
  });

  it("should update the shift", () => {
    const shiftId = "1234";
    const operations = {hjhj: "1"};
    const query = {something: true};
    axiosMock.onPatch(`/shifts/${shiftId}`).reply(expectRequest({statusCode: 200, token, jwtToken, body: {operations}, query}));
    return api.accounts.shifts.update({
      jwtToken,
      token,
      shiftId,
      operations,
      query
    });
  });

  it("should get all shifts/location-closures", () => {
    const query = {status: "closed"};
    axiosMock.onGet("/shifts/location-closures").reply(expectRequest({statusCode: 200, token, jwtToken, query}));
    return api.accounts.shifts.locationClosures.all({token, jwtToken, query});
  });

  it("should get shifts-location-closures", () => {
    const locationClosureId = "locationClosure1";
    axiosMock.onGet(`/shifts/location-closures/${locationClosureId}`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.locationClosures.get({token, locationClosureId});
  });

  it("should create the shift-location-closure", () => {
    const locationClosure = {};
    axiosMock.onPost("/shifts/location-closures").reply(expectRequest({statusCode: 200, token, jwtToken, body: locationClosure}));
    return api.accounts.shifts.locationClosures.create({
      jwtToken,
      token,
      locationClosure
    });
  });

  it("should create the shift-location-closure comment", () => {
    const locationClosureId = "locationClosure1";
    const locationClosureComment = {};
    axiosMock.onPost(`/shifts/location-closures/${locationClosureId}/comments`)
      .reply(expectRequest({statusCode: 200, token, jwtToken, body: locationClosureComment}));
    return api.accounts.shifts.locationClosures.comments.create({
      jwtToken,
      token,
      locationClosureId,
      locationClosureComment
    });
  });

  it("should get the shift payments", () => {
    const shiftId = "shiftId1";
    axiosMock.onGet(`/shifts/${shiftId}/payments`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.payments.get({token, jwtToken, shiftId});
  });
});
