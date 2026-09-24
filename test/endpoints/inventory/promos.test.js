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

  describe("beneficiaries by document", () => {
    const importId = "6ab3e0000000000000000abc";
    const listRuleId = "6ab58099ae1b264fa4166a94";
    const beneficiaries = [{documentTypeId: "5a959a4aa7114ffd7f000002", documentNumber: "30111222"}];
    const operations = [{documentTypeId: "5a959a4aa7114ffd7f000002", documentNumber: "30111222", op: "add", value: 1}];

    it("should get the beneficiaries list settings", () => {
      axiosMock.onGet(`/promos/${promoId}/rules/${listRuleId}/beneficiaries-list`).reply(expectRequest({
        statusCode: 200, token, jwtToken, requireJwtTokenOnGet: true
      }));
      return api.inventory.promos.getBeneficiariesList({token, jwtToken, promoId, ruleId: listRuleId});
    });

    it("should update the beneficiaries list settings", () => {
      const beneficiariesList = {enabled: true, maxUsesPerBeneficiary: 2};
      axiosMock.onPut(`/promos/${promoId}/rules/${listRuleId}/beneficiaries-list`).reply(expectRequest({
        statusCode: 200, token, jwtToken, body: {beneficiariesList}
      }));
      return api.inventory.promos.updateBeneficiariesList({token, jwtToken, promoId, ruleId: listRuleId, beneficiariesList});
    });

    it("should start a beneficiaries import", () => {
      axiosMock.onPost(`/promos/${promoId}/rules/${listRuleId}/beneficiaries-imports`).reply(expectRequest({statusCode: 200, token, jwtToken}));
      return api.inventory.promos.createBeneficiariesImport({token, jwtToken, promoId, ruleId: listRuleId});
    });

    it("should add rows to a beneficiaries import", () => {
      axiosMock.onPost(`/promos/${promoId}/rules/${listRuleId}/beneficiaries-imports/${importId}/rows`).reply(expectRequest({
        statusCode: 200, token, jwtToken, body: {beneficiaries}
      }));
      return api.inventory.promos.addBeneficiariesImportRows({token, jwtToken, promoId, ruleId: listRuleId, importId, beneficiaries});
    });

    it("should complete a beneficiaries import", () => {
      axiosMock.onPost(`/promos/${promoId}/rules/${listRuleId}/beneficiaries-imports/${importId}/complete`).reply(expectRequest({
        statusCode: 200, token, jwtToken
      }));
      return api.inventory.promos.completeBeneficiariesImport({token, jwtToken, promoId, ruleId: listRuleId, importId});
    });

    it("should page through the beneficiaries", () => {
      const query = {page: 2, pageSize: 1000};
      axiosMock.onGet(`/promos/${promoId}/rules/${listRuleId}/beneficiaries`).reply(expectRequest({
        statusCode: 200, token, jwtToken, requireJwtTokenOnGet: true, query
      }));
      return api.inventory.promos.getBeneficiaries({token, jwtToken, promoId, ruleId: listRuleId, query});
    });

    it("should add or subtract beneficiary uses", () => {
      axiosMock.onPatch(`/promos/${promoId}/rules/${listRuleId}/beneficiary-uses`).reply(expectRequest({
        statusCode: 200, token, jwtToken, body: {operations}
      }));
      return api.inventory.promos.patchBeneficiaryUses({token, jwtToken, promoId, ruleId: listRuleId, operations});
    });
  });
});
