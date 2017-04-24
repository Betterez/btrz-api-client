const { axiosMock } = require("./../../test-helpers");
const client = require("./../../../index").createClient({ baseURL: "http://test.com" });

describe('inventory/insurances', function() {
  const token = 'I owe you a token';
  
  before(function() {
    axiosMock.onGet(`/inventory/insurances`).reply(200, {})
  });

  it("should list insurances", function() {
    return client.inventory.insurances.all({ token });
  });

});