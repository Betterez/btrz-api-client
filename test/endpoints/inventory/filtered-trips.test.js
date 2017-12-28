const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/filtered-trips', function() {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';
  
  afterEach(function() {
    axiosMock.reset();
  })

  it("should create a filter trip", function() {
    axiosMock.onPost(`/filtered-trips`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.filteredTrips.create({ token, jwtToken, tripSegmentsId: "myTripSegmentId" });
  });

});