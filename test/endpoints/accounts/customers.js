const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('accounts/customers', function() {
  const token = 'I owe you a token';
  const jwtToken = 'I owe you a JWT token';

  afterEach(function() {
    axiosMock.restore();
  })

  it("should PUT a customer", function() {
    const customerId = "123123123123",
      customer = {firstName: "new name!"};
    axiosMock.onPut(`/customers/${customerId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.accounts.customers.put({ jwtToken, token, customerId, customer });
  });
});