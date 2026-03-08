const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("btrzpay/cybersource3ds", () => {
  const token = "api-key";
  const jwtToken = "jwt-token";

  afterEach(() => {
    axiosMock.reset();
  });

  describe("getToken", () => {
    it("should get 3DS token with transactionId and token", () => {
      const query = {transactionId: "507f1f77bcf86cd799439011"};
      axiosMock.onGet("/cbs-token", {params: query}).reply(expectRequest({statusCode: 200, token}));
      return api.btrzpay.cybersource3ds.getToken({token, query});
    });

    it("should get 3DS token with transactionId, optional operatingCompanyId, and jwtToken", () => {
      const query = {transactionId: "507f1f77bcf86cd799439011", operatingCompanyId: "507f1f77bcf86cd799439012"};
      axiosMock.onGet("/cbs-token", {params: query}).reply(expectRequest({statusCode: 200, token, jwtToken}));
      return api.btrzpay.cybersource3ds.getToken({token, jwtToken, query});
    });
  });

  describe("evaluateRisk", () => {
    it("should POST evaluate-risk with riskEvaluation body and token", () => {
      const riskEvaluation = {paymentData: {}, cartPayload: {}, operatingCompanyId: "op1"};
      axiosMock.onPost("/cbs-evaluate-risk", riskEvaluation).reply(expectRequest({statusCode: 200, token, jwtToken}));
      return api.btrzpay.cybersource3ds.evaluateRisk({token, jwtToken, riskEvaluation});
    });

    it("should POST evaluate-risk with jwtToken and headers", () => {
      const riskEvaluation = {paymentData: {}};
      axiosMock.onPost("/cbs-evaluate-risk", riskEvaluation).reply(expectRequest({statusCode: 200, token, jwtToken}));
      return api.btrzpay.cybersource3ds.evaluateRisk({token, jwtToken, riskEvaluation, headers: {"X-Custom": "v"}});
    });
  });

  describe("payerAuthenticationEnrollment", () => {
    it("should POST payer authentication enrollment with body and token", () => {
      const body = {paymentData: {}, operatingCompanyId: "op1"};
      axiosMock.onPost("/cbs-pa-enrollment", body).reply(expectRequest({statusCode: 200, token, jwtToken}));
      return api.btrzpay.cybersource3ds.payerAuthenticationEnrollment({token, jwtToken, body});
    });
  });

  describe("validatePayerAuthenticationEnrollment", () => {
    it("should POST validate payer authentication with body and token", () => {
      const body = {paymentData: {}, processorTransactionId: "proc-tx-1"};
      axiosMock.onPost("/cbs-validate-pa-enrollment", body).reply(expectRequest({statusCode: 200, token, jwtToken}));
      return api.btrzpay.cybersource3ds.validatePayerAuthenticationEnrollment({token, jwtToken, body});
    });
  });
});
