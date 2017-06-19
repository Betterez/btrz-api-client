const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('sales/payment-providers', function() {
  const token = 'I owe you a token';
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should list payment providers", function() {
    axiosMock.onGet(`/payment-providers`).reply(expectRequest({ statusCode: 200, token }));
    return api.sales.paymentProviders.all({ token });
  });

});