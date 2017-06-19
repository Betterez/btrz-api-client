const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });
const expect = require("chai").expect;

describe('sales/cart', function() {
  const token = 'I owe you a token';
  const jwtToken = 'I owe you a JWT token'
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should get a cart by id", function() {
    const cartId = "cartId1";
    axiosMock.onGet(`/cart/${cartId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.sales.cart.get({ token, id: cartId });
  });

}); 