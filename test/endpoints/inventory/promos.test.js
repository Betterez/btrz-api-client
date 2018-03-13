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

  it("should get single promo", function() {
    axiosMock.onGet(`/promos/${promoId}`).reply(expectRequest({ statusCode: 200, token }));
    const query = {accountId};
    return api.inventory.promos.get({ promoId, accountId, token, query });
  });

  it("should create new promo", function() {
    axiosMock.onPost(`/promos`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.promos.create({ jwtToken, promo, token });
  });

  it("should remove promo with given id", function() {
    axiosMock.onDelete(`/promos/${promoId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.promos.remove({ jwtToken, promoId, token });
  });

  it("should update existing promo", function() {
    axiosMock.onPatch(`/promos/${promoId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.promos.update({ token, jwtToken, promoId, updatePromoData });
  });

  it("should add rule to a promo", function() {
    axiosMock.onPost(`/promos/${promoId}/rules`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.promos.addRule({ token, jwtToken, promoId, updatePromoData });
  });

  it("should update a rule", function() {
    axiosMock.onPut(`/promos/${promoId}/rules/${ruleId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.promos.updateRule({ token, jwtToken, promoId, ruleId, rule });
  });
});
