const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });
const expect = require("chai").expect;

describe('operations/manifest', function() {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should get a manifest by routeId, scheduleId and date", function() {
    const routeId = "2349283409238429348",
      scheduleId = "abc",
      date = "2017-10-10";
    axiosMock.onGet("/manifest").reply(expectRequest({ statusCode: 200, token }));
    return api.operations.manifest.get({ token, jwtToken, query: {routeId, scheduleId, date} });
  });

  it("should patch manifest", function() {
    const providerId = "providerId1";
    axiosMock.onPatch("/manifests").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.operations.manifest.patch({ token, jwtToken, query: {providerId}, operations: {op: "add_tickets", tickets: []} });
  });

}); 
