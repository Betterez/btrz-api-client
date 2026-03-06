"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

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


function terminalPaymentsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var mit = {
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
    update: function update(_ref2) {
      var token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          id = _ref2.id,
          terminalPayment = _ref2.terminalPayment,
          _ref2$query = _ref2.query,
          query = _ref2$query === undefined ? {} : _ref2$query,
          headers = _ref2.headers;

      return client({
        url: "/terminal-payments/mit/" + id,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: { terminalPayment: terminalPayment }
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
    get: function get(_ref3) {
      var token = _ref3.token,
          jwtToken = _ref3.jwtToken,
          id = _ref3.id,
          _ref3$query = _ref3.query,
          query = _ref3$query === undefined ? {} : _ref3$query,
          headers = _ref3.headers;

      return client.get("/terminal-payments/mit/" + id, {
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  var webhooks = {
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
    getnet: function getnet(_ref4) {
      var data = _ref4.data,
          providerId = _ref4.providerId,
          _ref4$headers = _ref4.headers,
          headers = _ref4$headers === undefined ? {} : _ref4$headers,
          token = _ref4.token,
          jwtToken = _ref4.jwtToken;

      var _headers = token && jwtToken ? authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }) : headers;

      return client({
        url: "/terminal-payments/webhooks/getnet/" + providerId,
        method: "post",
        headers: _headers,
        data: data
      });
    }
  };

  return {
    mit: mit,
    webhooks: webhooks
  };
}

module.exports = terminalPaymentsFactory;