const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "" });
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

  it("should create a cart", function() {
    axiosMock.onPost(`/cart`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.sales.cart.create({ jwtToken, token, cart: { operationId: 1234 } });
  });

  it("should add to existing cart", function() {
    const cartId = "someCartId";
    axiosMock.onPost(`/cart/${cartId}/items`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.sales.cart.add({ jwtToken, token, cartId, cart: { operationId: 1234 } });
  });

  it("should delete item from existing cart", function() {
    const cartId = "someCartId";
    axiosMock.onDelete(`/cart/${cartId}/items`).reply(function(request) {
      expect(request.params).to.eql({operationId: 1234, providerId: 123});
      expect(request.headers).to.eql({ 
        Accept: 'application/json',
        'x-api-key': 'I owe you a token',
        authorization: 'Bearer I owe you a JWT token'
      });
      expect(request.method).to.eql("delete");
      expect(request.url).to.eql(`/cart/${cartId}/items`);
      return [200];
    });

    return api.sales.cart.deleteItems({ jwtToken, token, cartId, params: { operationId: 1234, providerId: 123 } });
  });

  it("should get loyalty points amount of a cart", function() {
    const cartId = "cartId1";
    axiosMock.onGet(`/carts/${cartId}/loyalty-points-amount`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.sales.cart.loyaltyPointsAmount.get({ token, jwtToken, cartId });
  });

  it("should update a cart", function() {
    const cartId = "someCartId",
      providerId = "someProviderId",
      op = "overrideFees";
    axiosMock.onPatch(`/cart/${cartId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.sales.cart.patch({ jwtToken, token, cartId, data: {providerId, operations: [{op}]} });
  });
});
