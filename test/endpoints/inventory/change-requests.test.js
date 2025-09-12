const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe.only("inventory/change-requests", function() {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(function() {
    axiosMock.reset();
  });

  it("should get a change request by id", function() {
    const changerequestId = "507f1f77bcf86cd799439011";
    axiosMock.onGet(`/change-requests/${changerequestId}/manifests`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.changeRequests.get({token, jwtToken, changerequestId});
  });

  it("should create a change request", function() {
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

  it("should update a change request", function() {
    const data = {status: "approved"};
    const changerequestId = "507f1f77bcf86cd799439011";
    axiosMock.onPut(`/change-requests/${changerequestId}/manifests`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.changeRequests.update({token, jwtToken, changerequestId, data});
  });
});
