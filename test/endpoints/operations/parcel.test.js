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
    axiosMock.onGet(`/cart/${parcelId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.sales.cart.get({ token, id: parcelId });
  });

}); 