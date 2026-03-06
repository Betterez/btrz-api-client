const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * @typedef {Object} TerminalPaymentsQuery
 * @property {string} [providerId] - Provider account ID
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
     * @param {TerminalPaymentsQuery} [opts.query] - Query params
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
     * @param {TerminalPaymentsQuery} [opts.query] - Query params
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
     * POST /terminal-payments/webhooks/getnet/:providerId - Getnet webhook.
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
