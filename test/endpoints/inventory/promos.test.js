const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/promos', function() {
  const token = 'I owe you a token',
    promoId = '5a959a4aa7114ffd7f000001',
    accountId = '4f74a235b0dffc0210000015',
    ruleId = '',
    jwtToken = 'I owe you a JWT token',
    promo = {
      "accountId": "4f74a235b0dffc0210000015",
      "internalId": "patchTEST",
      "name": "patchTEST"
    },
    updatePromoData = {
      "internalId": "createTESTmod",
      "campaign":"patchTEST",
      "name":"patchTESTmod",
      "disabled": false
    },
    rule = {
      "valueType": "%",
      "value": 100
    };

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
