const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('operations/trip-change-info', function() {
  const token = 'I owe you a token';
  const jwtToken = 'I owe you a JWT token';

  afterEach(function() {
    axiosMock.reset();
  });

  it("should get a trip info to change", function() {
    const productId = "productId1";
    axiosMock.onGet(`/trip-change-info/${productId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.operations.tripChangeInfo.get({ token, jwtToken, productId });
  });

});
