const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/countries', function() {
  const token = 'I owe you a token';
  
  afterEach(function() {
    axiosMock.restore();
  })

  it("should list countries", function() {
    axiosMock.onGet(`/countries`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.countries.all({ token });
  });

});