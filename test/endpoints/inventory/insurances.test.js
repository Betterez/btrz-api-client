const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/insurances', function() {
  const token = 'I owe you a token';
  const jwtToken = 'I owe you a JWT token'
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should list insurances", function() {
    axiosMock.onGet(`/insurances`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.insurances.all({ token });
  });

  it("should create insurances", function() {
    axiosMock.onPost(`/insurances`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.insurances.create({ jwtToken, token, insurance: { cost: 1000, threshold: 1000 } });
  });

  it("should enabled insurance", function() {
    axiosMock.onPut(`/insurances/1`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.insurances.enabled({ jwtToken, token, insurance: { _id: "1", enabled: true } });
  });

}); 