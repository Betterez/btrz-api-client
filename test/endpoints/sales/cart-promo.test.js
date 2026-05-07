const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("sales/cart/{cartId}/promo/{promoCode}", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should apply a promo to cart", () => {
    const cartId = "123";
    const promoCode = "ABC";
    axiosMock.onPost(`/cart/${cartId}/promos`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.sales.cartPromo.create({jwtToken, token, cartId, query: {providerId: "provideId1", promoCode}});
  });

  it("should remove promos from cart", () => {
    const cartId = "123";
    axiosMock.onDelete(`/cart/${cartId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.sales.cartPromo.remove({jwtToken, token, cartId, query: {providerId: "provideId1"}});
  });
});
