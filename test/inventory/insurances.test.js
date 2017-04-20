const { axiosMock } = require("./../test-helpers");
const client = require("./../../index").defaults({});

describe('inventory/insurances', function() {
  const token = 'I owe you a token';
  
  before(function() {
    axiosMock.onGet(`/inventory/insurances`).reply(200, {})
  });

  it("should list insurances", function() {
    return client.inventory.insurances.index({ token });
  });

});