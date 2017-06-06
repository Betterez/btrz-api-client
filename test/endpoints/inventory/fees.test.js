const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/fees', function() {
  const token = 'I owe you a token';
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should list fees", function() {
    axiosMock.onGet(`/fees`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.fees.all({ token });
  });

});