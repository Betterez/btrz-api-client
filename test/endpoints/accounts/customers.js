const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('accounts/customers', () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(() => {
    axiosMock.reset();
  });

  it("should PUT a customer", () => {
    const customerId = "123123123123",
      customer = {firstName: "new name!"};
    axiosMock.onPut(`/customers/${customerId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.accounts.customers.put({ jwtToken, token, customerId, customer });
  });

  it("should GET a list of customers", () => {
    axiosMock.onGet("/customers").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.accounts.customers.all({ jwtToken, token });
  });

  it("should GET a list of customers by customerNumber", () => {
    const query = {customerNumber: "123-123-123"};
    axiosMock.onGet("/customers", {params: query}).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.accounts.customers.all({ jwtToken, token, query });
  });
});
