"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /oxxo/:token/payments (btrz-api-payments). See get-payments-handler getSpec().
 * @typedef {Object} OxxoPaymentsListQuery
 * @property {string} referenceNumber - Payment reference number (required)
 */

/**
 * Request body for POST /oxxo/:token/payments/:referenceNumber. PostOxxoPaymentsPayload.
 * @typedef {Object} PostOxxoPaymentsPayload
 * @property {string} ticket - Oxxo sale ticket id
 * @property {number} amount - Amount to pay in cents
 * @property {string} folio - FEMSA transaction id
 * @property {string} store - Store id
 * @property {string} account - Account id (ObjectId)
 */

/**
 * Request body for POST /oxxo/:token/reverse/:referenceNumber. PostOxxoReversePayload.
 * @typedef {Object} PostOxxoReversePayload
 * @property {string} ticket - Oxxo sale ticket id
 * @property {number} amount - Amount in cents
 * @property {string} folio - FEMSA transaction id
 * @property {string} store - Store id
 * @property {string} account - Account id (ObjectId)
 */

/**
 * Factory for OXXO API (btrz-api-payments). Endpoints are hideInDocumentation; client for internal use.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ token: Object, payments: Object }}
 */


function oxxoFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function authProvider(opts) {
    return opts !== undefined && opts !== null ? opts : internalAuthTokenProvider;
  }

  var token = {
    /**
     * GET /oxxo/token - get new Oxxo token. No query params.
     * @param {Object} opts
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider]
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<import("axios").AxiosResponse<{ token: string }>>}
     *   GetOxxoTokenResponse. Rejects with 401, 500.
     */
    get: function get(_ref2) {
      var jwtToken = _ref2.jwtToken,
          headers = _ref2.headers,
          optsAuth = _ref2.internalAuthTokenProvider;

      return client({
        url: "/oxxo/token",
        headers: authorizationHeaders({ jwtToken: jwtToken, internalAuthTokenProvider: authProvider(optsAuth), headers: headers })
      });
    }
  };

  var payments = {
    /**
     * GET /oxxo/:token/payments - list Oxxo payments by token and reference number.
     * @param {Object} opts
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.oxxoToken - Oxxo token
     * @param {OxxoPaymentsListQuery} opts.query - referenceNumber (required)
     * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider]
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<import("axios").AxiosResponse<{ payments: Array }>>}
     *   GetOxxoPaymentsResponse. Rejects with 400 (ERROR_GETTING_PAYMENT_METHODS, OXXO_PAY_NOT_ENABLED), 401, 500.
     */
    all: function all(_ref3) {
      var jwtToken = _ref3.jwtToken,
          headers = _ref3.headers,
          oxxoToken = _ref3.oxxoToken,
          query = _ref3.query,
          optsAuth = _ref3.internalAuthTokenProvider;

      return client({
        url: "/oxxo/" + oxxoToken + "/payments",
        params: query,
        headers: authorizationHeaders({ jwtToken: jwtToken, internalAuthTokenProvider: authProvider(optsAuth), headers: headers })
      });
    },

    /**
     * POST /oxxo/:token/payments/:referenceNumber - pay Oxxo payment (referenceNumber: UUID v4 or 20 digits).
     * @param {Object} opts
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.oxxoToken - Oxxo token
     * @param {string} opts.referenceNumber - Payment reference number
     * @param {PostOxxoPaymentsPayload|{ oxxoInfo: PostOxxoPaymentsPayload }} opts.data - Request body
     * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider]
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<import("axios").AxiosResponse<{ payment: Object }>>}
     *   Rejects with 400 (INVALID_REFERENCE_NUMBER_FORMAT, INVALID_ACCOUNT, OXXO_PAY_NOT_ENABLED), 401, 500.
     */
    update: function update(_ref4) {
      var jwtToken = _ref4.jwtToken,
          headers = _ref4.headers,
          oxxoToken = _ref4.oxxoToken,
          query = _ref4.query,
          referenceNumber = _ref4.referenceNumber,
          data = _ref4.data,
          optsAuth = _ref4.internalAuthTokenProvider;

      return client({
        url: "/oxxo/" + oxxoToken + "/payments/" + referenceNumber,
        method: "post",
        params: query,
        data: data,
        headers: authorizationHeaders({ jwtToken: jwtToken, internalAuthTokenProvider: authProvider(optsAuth), headers: headers })
      });
    },

    /**
     * POST /oxxo/:token/reverse/:referenceNumber - reverse Oxxo payment (referenceNumber: UUID v4 or 20 digits).
     * @param {Object} opts
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.oxxoToken - Oxxo token
     * @param {string} opts.referenceNumber - Payment reference number
     * @param {PostOxxoReversePayload|{ oxxoInfo: PostOxxoReversePayload }} [opts.data] - Request body
     * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider]
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<import("axios").AxiosResponse<{ payment: Object }>>}
     *   Rejects with 400 (INVALID_REFERENCE_NUMBER_FORMAT, INVALID_ACCOUNT, OXXO_PAY_NOT_ENABLED), 401, 500.
     */
    reverse: function reverse(_ref5) {
      var jwtToken = _ref5.jwtToken,
          headers = _ref5.headers,
          query = _ref5.query,
          referenceNumber = _ref5.referenceNumber,
          data = _ref5.data,
          optsAuth = _ref5.internalAuthTokenProvider,
          oxxoToken = _ref5.oxxoToken;

      return client({
        url: "/oxxo/" + oxxoToken + "/reverse/" + referenceNumber,
        method: "post",
        params: query,
        data: data,
        headers: authorizationHeaders({ jwtToken: jwtToken, internalAuthTokenProvider: authProvider(optsAuth), headers: headers })
      });
    }
  };

  return {
    token: token,
    payments: payments
  };
}

module.exports = oxxoFactory;