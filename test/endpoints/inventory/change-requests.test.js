const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/change-requests", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all change requests", () => {
    const query = {
      type: "schedule",
      status: "pending",
      page: 1,
      pageSize: 20
    };
    axiosMock.onGet("/change-requests").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.changeRequests.all({token, jwtToken, query});
  });

  it("should get a change request by id", () => {
    const changerequestId = "507f1f77bcf86cd799439011";
    axiosMock.onGet(`/change-requests/${changerequestId}/manifests`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.changeRequests.get({token, jwtToken, changerequestId});
  });

  it("should create a change request", () => {
    const data = {
      manifestId: "507f1f77bcf86cd799439012",
      request: {
        type: "update",
        changes: {status: "approved"}
      }
    };
    axiosMock.onPost("/change-requests/manifests").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.changeRequests.create({token, jwtToken, data});
  });

  it("should update a change request", () => {
    const data = {status: "approved"};
    const changerequestId = "507f1f77bcf86cd799439011";
    axiosMock.onPut(`/change-requests/${changerequestId}/manifests`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.changeRequests.update({token, jwtToken, changerequestId, data});
  });

  it("should get an schedule change request by id", () => {
    const changeRequestId = "507f1f77bcf86cd799439011";
    axiosMock.onGet(`/change-requests/${changeRequestId}/schedules`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.changeRequests.schedules.get({token, jwtToken, changeRequestId});
  });

  it("should create a schedule change request", () => {
    const data = {
      scheduleId: "0",
      routeId: "507f1f77bcf86cd799439013",
      request: {}
    };
    axiosMock.onPost("/change-requests/schedules").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.changeRequests.schedules.create({token, jwtToken, data});
  });

  it("should update a schedule change request", () => {
    const data = {status: "approved"};
    const changeRequestId = "507f1f77bcf86cd799439011";
    axiosMock.onPut(`/change-requests/${changeRequestId}/schedules`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.changeRequests.schedules.update({token, jwtToken, changeRequestId, data});
  });
});
