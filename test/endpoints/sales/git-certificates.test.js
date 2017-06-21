const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });
const expect = require("chai").expect;

describe('sales/gift-certificates', function() {
  const token = 'I owe you a token';
  const jwtToken = 'I owe you a JWT token'
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should get a gift certificate by GC number", function() {
    const GCNumber = "GC-12345ABCDE";
    axiosMock.onGet(`/gift-certificates/${GCNumber}`).reply(expectRequest({ statusCode: 200, token }));
    return api.sales.giftCertificates.get({ token, GCNumber });
  });

}); 