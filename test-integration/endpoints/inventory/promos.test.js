const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client").createApiClient({
    baseURL: `http://localhost:${port}`,
    baseURLOverride: {
      inventory: (baseUrl) => `${baseUrl}/inventory`
    }
  }),
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
  },
  updateRuleData = {
    "valueType": "%",
    "value": 50
  };

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe("inventory/promos", () => {

  it("should list promos", () => {
    const query = {channels: "backoffice"};
    return api.inventory.promos.all({ token, query })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200));
  });

  it("should get a promo", () => {
    return api.inventory.promos.get({ promoId: "5a959a4aa7114ffd7f000001", accountId: "4f74a235b0dffc0210000015", token })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200));
  });

  it("should create a promo", () => {
    return api.inventory.promos.create({ jwtToken, promo, token })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200));
  });

  it("should disable promos", () => {
    return api.inventory.promos.remove({ jwtToken, promoId: "55662844183d59b631000003", token })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200));
  });

  it("should update a promo", () => {
    return api.inventory.promos.update({ jwtToken, promoId: "55662844183d59b631000003", update: updatePromoData, token })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200));
  });

  it("should add rule to a promo", () => {
    return api.inventory.promos.addRule({ jwtToken, promoId: "55662844183d59b631000003", rule, token })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200));
  });

  it("should update a rule", () => {
    return api.inventory.promos.updateRule({ jwtToken, promoId: "55662844183d59b631000003", ruleId: "test #3308-0", rule: updateRuleData, token })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200));
  });

});
