const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/promos", () => {
  const token = "I owe you a token";
  const promoId = "5a959a4aa7114ffd7f000001";
  const accountId = "4f74a235b0dffc0210000015";
  const ruleId = "";
  const jwtToken = "I owe you a JWT token";
  const promo = {
    "accountId": "4f74a235b0dffc0210000015",
    "internalId": "patchTEST",
    "name": "patchTEST"
  };
  const updatePromoData = {
    "internalId": "createTESTmod",
    "campaign": "patchTEST",
    "name": "patchTESTmod",
    "disabled": false
  };
  const rule = {
    "valueType": "%",
    "value": 100
  };

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list promos", () => {
    axiosMock.onGet("/promos").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.promos.all({token});
  });

  it("should send jwt token when listing promos", () => {
    axiosMock.onGet("/promos").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      requireJwtTokenOnGet: true
    }));
    return api.inventory.promos.all({token, jwtToken});
  });

  it("should get single promo", () => {
    axiosMock.onGet(`/promos/${promoId}`).reply(expectRequest({statusCode: 200, token}));
    const query = {accountId};
    return api.inventory.promos.get({promoId, accountId, token, query});
  });

  it("should send jwt token when getting a promo by id", () => {
    axiosMock.onGet(`/promos/${promoId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      requireJwtTokenOnGet: true
    }));
    const query = {accountId};
    return api.inventory.promos.get({promoId, accountId, token, jwtToken, query});
  });

  it("should create new promo", () => {
    axiosMock.onPost("/promos").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.promos.create({jwtToken, promo, token});
  });

  it("should remove promo with given id", () => {
    axiosMock.onDelete(`/promos/${promoId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.promos.remove({jwtToken, promoId, token});
  });

  it("should update existing promo", () => {
    axiosMock.onPatch(`/promos/${promoId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.promos.update({token, jwtToken, promoId, updatePromoData});
  });

  it("should add rule to a promo", () => {
    axiosMock.onPost(`/promos/${promoId}/rules`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.promos.addRule({token, jwtToken, promoId, updatePromoData});
  });

  it("should update a rule", () => {
    axiosMock.onPut(`/promos/${promoId}/rules/${ruleId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.promos.updateRule({token, jwtToken, promoId, ruleId, rule});
  });
});
