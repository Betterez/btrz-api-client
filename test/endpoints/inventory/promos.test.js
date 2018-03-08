const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/promos', function() {
  const token = 'I owe you a token',
  promoId = '55662844183d59b631000003',
  jwtToken = 'I owe you a JWT token';

  afterEach(function() {
    axiosMock.reset();
  });

  it("should list promos", function() {
    axiosMock.onGet(`/promos`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.promos.all({ token });
  });

  it("should remove promo with given id", function() {
    axiosMock.onDelete(`/promos/${promoId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.promos.remove({ jwtToken, promoId, token });
  });
});
