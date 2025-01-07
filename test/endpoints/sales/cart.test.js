const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: ""});
const expect = require("chai").expect;

describe("sales/cart", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a cart by id", () => {
    const cartId = "cartId1";
    axiosMock.onGet(`/cart/${cartId}`).reply(expectRequest({statusCode: 200, token}));
    return api.sales.cart.get({token, id: cartId});
  });

  it("should create a cart", () => {
    axiosMock.onPost("/cart").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.sales.cart.create({jwtToken, token, cart: {operationId: 1234}});
  });

  it("should add to existing cart", () => {
    const cartId = "someCartId";
    axiosMock.onPost(`/cart/${cartId}/items`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.sales.cart.add({jwtToken, token, cartId, cart: {operationId: 1234}});
  });

  it("should delete item from existing cart", () => {
    const cartId = "someCartId";
    axiosMock.onDelete(`/cart/${cartId}/items`).reply((request) => {
      expect(request.params).to.eql({operationId: 1234, providerId: 123});
      expect(request.headers).to.eql({
        "Accept": "application/json",
        "x-api-key": "I owe you a token",
        "authorization": "Bearer I owe you a JWT token"
      });
      expect(request.method).to.eql("delete");
      expect(request.url).to.eql(`/cart/${cartId}/items`);
      return [200];
    });

    return api.sales.cart.deleteItems({jwtToken, token, cartId, params: {operationId: 1234, providerId: 123}});
  });

  it("should get loyalty points amount of a cart", () => {
    const cartId = "cartId1";
    axiosMock.onGet(`/carts/${cartId}/loyalty-points-amount`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.sales.cart.loyaltyPointsAmount.get({token, jwtToken, cartId});
  });

  it("should update a cart", () => {
    const cartId = "someCartId";
    const providerId = "someProviderId";
    const op = "overrideFees";
    axiosMock.onPatch(`/cart/${cartId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.sales.cart.patch({jwtToken, token, cartId, data: {providerId, operations: [{op}]}});
  });

  it("should get the shift partial deposit status", () => {
    const shiftId = "shiftId1";
    axiosMock.onGet(`/cart/${shiftId}/partial-deposit-status`).reply(expectRequest({statusCode: 200, token}));
    return api.sales.cart.partialDepositStatus.get({token, jwtToken, shiftId});
  });

  it("should delete payments from a cart", () => {
    const cartId = "someCartId";
    axiosMock.onDelete(`/carts/${cartId}/payments`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.sales.cart.payments.delete({jwtToken, token, cartId});
  });

  it("should update payments from a cart", () => {
    const cartId = "someCartId";
    axiosMock.onPut(`/carts/${cartId}/payments`).reply(expectRequest({statusCode: 204, token, jwtToken}));
    return api.sales.cart.payments.put({jwtToken, token, cartId});
  });

  it("should post a mount with tax exempt from the payment method", () => {
    const cartId = "thisCartId";
    axiosMock.onPost(`/carts/${cartId}/tax-exempt-payment-method`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.sales.cart.taxExemptPaymentMethod.post({jwtToken, token, cartId});
  });

  it("should delete payments from a cart", () => {
    const cartId = "someCartId";
    axiosMock.onDelete(`/carts/${cartId}/financing-costs`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.sales.cart.financingCosts.delete({jwtToken, token, cartId});
  });

  it("should update payments from a cart", () => {
    const cartId = "someCartId";
    const financingCost = {_id: "123"};
    axiosMock.onPost(`/carts/${cartId}/financing-costs`).reply(expectRequest({statusCode: 204, token, jwtToken}));
    return api.sales.cart.financingCosts.create({jwtToken, token, cartId, financingCost});
  });
});
