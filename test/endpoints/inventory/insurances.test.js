const { axiosMock } = require("./../../test-helpers");
const api = require("./../../../index").createApiClient({ baseURL: "http://test.com" });

describe('inventory/insurances', function() {
  const token = 'I owe you a token';
  
  before(function() {
    axiosMock.onGet(`/inventory/insurances/`).reply(200);
    axiosMock.onPost(`/inventory/insurances/`).reply(200);
    axiosMock.onPatch(`/inventory/insurances/1`).reply(200);
  });

  it("should list insurances", function() {
    return api.inventory.insurances.all({ token });
  });

  it("should create insurances", function() {
    return api.inventory.insurances.create({ token, insurance: { cost: 1000, threshold: 1000 } });
  });

  it("should enabled insurance", function() {
    return api.inventory.insurances.enabled({ token, insurance: { _id: "1", enabled: true } });
  });

});