const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for GET /terminal-payments/mit/:id (btrz-api-payments). See get-mit-by-id-handler getSpec().
 * @typedef {Object} TerminalPaymentsMitGetQuery
 * @property {string} [providerId] - Account provider (operator) ID; used by agencies/sellers
 * @property {string} [branchId] - Branch id where payment started (required for GET)
 * @property {string} [companyId] - Company id where payment started (required for GET)
 * @property {string} [date] - Date when payment started; format dd/mm/yyyy (required for GET)
 */

/**
 * Query params for PUT /terminal-payments/mit/:id (btrz-api-payments). See put-mit-handler getSpec().
 * @typedef {Object} TerminalPaymentsMitPutQuery
 * @property {string} [providerId] - Account provider (operator) ID; used by agencies/sellers
 */

/**
 * Factory for terminal payments API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ mit: Object, webhooks: Object }}
 */
function terminalPaymentsFactory({client, internalAuthTokenProvider}) {
  const mit = {
    /**
     * PUT /terminal-payments/mit/:id - update MIT terminal payment.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Terminal payment id
     * @param {Object} opts.terminalPayment - Terminal payment payload
     * @param {TerminalPaymentsMitPutQuery} [opts.query] - Query params (providerId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update({token, jwtToken, id, terminalPayment, query = {}, headers}) {
      return client({
        url: `/terminal-payments/mit/${id}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: {terminalPayment}
      });
    },
    /**
     * GET /terminal-payments/mit/:id - get MIT terminal payment.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Terminal payment id
     * @param {TerminalPaymentsMitGetQuery} [opts.query] - Query params (providerId, branchId, companyId, date)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, id, query = {}, headers}) {
      return client.get(`/terminal-payments/mit/${id}`, {
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const webhooks = {
    /**
     * POST /terminal-payments/webhooks/getnet/:providerId - Getnet webhook. API does not accept query params.
     * @param {Object} opts
     * @param {Object} opts.data - Request body
     * @param {string} opts.providerId - Provider id
     * @param {Object} [opts.headers] - Optional headers
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    getnet({data, providerId, headers = {}, token, jwtToken}) {
      const _headers = token && jwtToken ?
        authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}) :
        headers;

      return client({
        url: `/terminal-payments/webhooks/getnet/${providerId}`,
        method: "post",
        headers: _headers,
        data
      });
    }
  };

  return {
    mit,
    webhooks
  };
}

module.exports = terminalPaymentsFactory;
