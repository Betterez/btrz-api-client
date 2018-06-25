const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('sales/bundles', function() {
  const token = 'I owe you a token';
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should list bundles", function() {
    const query = {
      providerId: "providerId1",
      type: "bundles"
    };
    axiosMock.onGet("/bundles").reply(expectRequest({ statusCode: 200, token }));
    return api.sales.bundles.all({ token, query });
  });

});
