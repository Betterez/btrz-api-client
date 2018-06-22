const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });
const expect = require("chai").expect;

describe('sales/cart/{cartId}/promo/{promoCode}', function() {
  const token = 'I owe you a token';
  const jwtToken = 'I owe you a JWT token'
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should apply a promo to cart", function() {
    const cartId = "123",
      promoCode = "ABC";
    axiosMock.onPost(`/cart/${cartId}/promos`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.sales.cartPromo.create({ jwtToken, token, cartId, query: {providerId: "provideId1", promoCode}});
  });

  it("should remove promos from cart", function() {
    const cartId = "123";
    axiosMock.onDelete(`/cart/${cartId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.sales.cartPromo.remove({ jwtToken, token, cartId, query: {providerId: "provideId1"}});
  });
});
