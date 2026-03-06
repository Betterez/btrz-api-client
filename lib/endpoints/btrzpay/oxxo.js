"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /oxxo/:token/payments (btrz-api-payments). See get-payments-handler getSpec().
 * @typedef {Object} OxxoPaymentsListQuery
 * @property {string} [referenceNumber] - Payment reference number
 */

/**
 * Factory for OXXO API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ token: Object, payments: Object }}
 */


function oxxoFactory(_ref) {
  var client = _ref.client,
      _internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var token = {
    /**
     * GET /oxxo/token - get OXXO token. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider]
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref2) {
      var jwtToken = _ref2.jwtToken,
          headers = _ref2.headers,
          internalAuthTokenProvider = _ref2.internalAuthTokenProvider;

      return client({
        url: "/oxxo/token",
        headers: authorizationHeaders({ jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  var payments = {
    /**
     * GET /oxxo/:oxxoToken/payments - list OXXO payments.
     * @param {Object} opts
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.oxxoToken - OXXO token
     * @param {OxxoPaymentsListQuery} [opts.query] - Query params (referenceNumber)
     * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider]
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<import("axios").AxiosResponse>} GetOxxoPaymentsResponse; 400 ERROR_GETTING_PAYMENT_METHODS
     */
    all: function all(_ref3) {
      var jwtToken = _ref3.jwtToken,
          headers = _ref3.headers,
          oxxoToken = _ref3.oxxoToken,
          query = _ref3.query,
          internalAuthTokenProvider = _ref3.internalAuthTokenProvider;

      return client({
        url: "/oxxo/" + oxxoToken + "/payments",
        params: query,
        headers: authorizationHeaders({ jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * POST /oxxo/:oxxoToken/payments/:referenceNumber - update OXXO payment. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.oxxoToken - OXXO token
     * @param {string} opts.referenceNumber - Payment reference number
     * @param {Object} opts.data - Request body (PostOxxoPaymentsPayload)
     * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider]
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref4) {
      var jwtToken = _ref4.jwtToken,
          headers = _ref4.headers,
          oxxoToken = _ref4.oxxoToken,
          query = _ref4.query,
          referenceNumber = _ref4.referenceNumber,
          data = _ref4.data,
          internalAuthTokenProvider = _ref4.internalAuthTokenProvider;

      return client({
        url: "/oxxo/" + oxxoToken + "/payments/" + referenceNumber,
        method: "post",
        params: query,
        data: data,
        headers: authorizationHeaders({ jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * POST /oxxo/:oxxoToken/reverse/:referenceNumber - reverse OXXO payment. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.oxxoToken - OXXO token
     * @param {string} opts.referenceNumber - Payment reference number
     * @param {Object} [opts.data] - Request body (PostOxxoReversePayload)
     * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider]
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    reverse: function reverse(_ref5) {
      var authToken = _ref5.token,
          jwtToken = _ref5.jwtToken,
          headers = _ref5.headers,
          query = _ref5.query,
          referenceNumber = _ref5.referenceNumber,
          data = _ref5.data,
          internalAuthTokenProvider = _ref5.internalAuthTokenProvider,
          oxxoToken = _ref5.oxxoToken;

      return client({
        url: "/oxxo/" + oxxoToken + "/reverse/" + referenceNumber,
        method: "post",
        params: query,
        data: data,
        headers: authorizationHeaders({ token: authToken, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  return {
    token: token,
    payments: payments
  };
}

module.exports = oxxoFactory;