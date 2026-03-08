/* eslint-disable max-len */
const {authorizationHeaders} = require("../endpoints_helpers.js");

/**
 * Query params for GET /cbs-token (btrz-api-payments). See getSpec() in get-token-handler.
 * @typedef {Object} Cybersource3dsTokenQuery
 * @property {string} transactionId - Transaction ID for which to create the 3DS token (required). ObjectId format.
 * @property {string} [operatingCompanyId] - Operating company ID when Cybersource uses overrides by operating company. ObjectId format.
 */

/**
 * Request body for POST /cbs-evaluate-risk. RiskEvaluationPostData.
 * @typedef {Object} RiskEvaluationPostData
 * @property {Object} paymentData - Payment information (required)
 * @property {Object} [cartPayload] - Cart information (CartData)
 * @property {string} [operatingCompanyId] - Operating company ID
 * @property {string} [providerName] - Provider name (e.g. "cybersource")
 */

/**
 * Request body for POST /cbs-pa-enrollment. PayerAuthenticationPostData.
 * @typedef {Object} PayerAuthenticationPostData
 * @property {Object} paymentData - Payment information (required)
 * @property {string} [operatingCompanyId] - Operating company ID
 * @property {string} [providerName] - Provider name (e.g. "cybersource")
 */

/**
 * Request body for POST /cbs-validate-pa-enrollment. ValidateAuthenticationPostData.
 * @typedef {Object} ValidateAuthenticationPostData
 * @property {Object} paymentData - Payment information (required)
 * @property {string} processorTransactionId - Processor transaction ID from payer authentication enrollment (required)
 * @property {string} [operatingCompanyId] - Operating company ID
 * @property {string} [providerName] - Provider name (e.g. "cybersource")
 */

/**
 * Factory for Cybersource 3DS API (btrz-api-payments): Cardinal/Cybersource token, evaluate risk, payer auth enrollment, validate enrollment.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ getToken: function, evaluateRisk: function, payerAuthenticationEnrollment: function, validatePayerAuthenticationEnrollment: function }}
 */
function cybersource3dsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /cbs-token - returns JWT to use with Cardinal (3DS).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Cybersource3dsTokenQuery} opts.query - transactionId (required), optional operatingCompanyId
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{ token: string }>>} ThreeDSTokenResponse. Rejects with 400 (WRONG_DATA, INVALID_TRANSACTION_ID, PROVIDER_NOT_FOUND, PAYMENT_METHOD_NOT_FOUND), 401, 500.
   */
  function getToken({token, jwtToken, query, headers}) {
    return client.get("/cbs-token", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /cbs-evaluate-risk - evaluate fraud risk (Decision Manager).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {RiskEvaluationPostData} opts.riskEvaluation - paymentData (required), optional cartPayload, operatingCompanyId
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<RiskEvaluationResponse>>} RiskEvaluationResponse. Rejects with 400 (EVAL_RISK_*), 401, 409 (CYBERSOURCE_AUTH_FAILED), 500.
   */
  function evaluateRisk({token, jwtToken, riskEvaluation, headers}) {
    return client.post("/cbs-evaluate-risk", riskEvaluation, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /cbs-pa-enrollment - check payer authentication enrollment.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PayerAuthenticationPostData} opts.body - paymentData (required), optional operatingCompanyId
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<PAEnrollmentResponse>>} PAEnrollmentResponse. Rejects with 400 (PAENROLL_*, PROVIDER_NOT_FOUND, PAYMENT_METHOD_NOT_FOUND), 401, 500.
   */
  function payerAuthenticationEnrollment({token, jwtToken, body, headers}) {
    return client.post("/cbs-pa-enrollment", body, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /cbs-validate-pa-enrollment - validate payer authentication challenge response.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ValidateAuthenticationPostData} opts.body - paymentData and processorTransactionId (required)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<ValidatePAEnrollmentResponse>>} ValidatePAEnrollmentResponse. Rejects with 400 (VALIDATE_PAENROLL_*), 401, 500.
   */
  function validatePayerAuthenticationEnrollment({token, jwtToken, body, headers}) {
    return client.post("/cbs-validate-pa-enrollment", body, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    getToken,
    evaluateRisk,
    payerAuthenticationEnrollment,
    validatePayerAuthenticationEnrollment
  };
}

module.exports = cybersource3dsFactory;
