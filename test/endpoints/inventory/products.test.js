const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/products', function() {
  const token = 'I owe you a token';
  const jwtToken = 'I owe you a JWT token';
  
  afterEach(function() {
    axiosMock.reset();
  })

  it("should list products", function() {
    axiosMock.onGet(`/products`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.products.all({ token });
  });

  it("should get product by id without jwtToken", function() {
    axiosMock.onGet(`/products/1`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.products.get({ token, productId: 1 });
  });

  it("should get product by id when called with jwtToken", function() {
    axiosMock.onGet(`/products/1`).reply(expectRequest({ statusCode: 200, token, jwtToken, requireJwtTokenOnGet:true }));
    return api.inventory.products.get({ token, productId: 1, jwtToken });
  });

  it("should get the product families", () => {
    axiosMock.onGet(`/products/families`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.products.families.all({ token });
  });

  it("should delete domain for all products from account", () => {
    const domain = "domain1";
    axiosMock.onDelete(`/products/domains/${domain}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));

    return api.inventory.products.domains.remove({
      jwtToken,
      token,
      domain
    });
  });

});