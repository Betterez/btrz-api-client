const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/ssrs', function() {
  const token = 'I owe you a token';
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should list ssrs", function() {
    axiosMock.onGet(`/ssrs`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.ssrs.all({ token });
  });

});