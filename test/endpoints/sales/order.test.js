const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });
const expect = require("chai").expect;

describe('sales/order', function() {
  const token = 'I owe you a token';
  const jwtToken = 'I owe you a JWT token'
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should get an order by id", function() {
    const orderId = "orderId1";
    axiosMock.onGet(`/order/${orderId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.sales.order.get({ token, orderId });
  });

  it("should create an order", function() {
    axiosMock.onPost(`/order`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.sales.order.create({ jwtToken, token, order: { cartId: 1234 } });
  });
});
