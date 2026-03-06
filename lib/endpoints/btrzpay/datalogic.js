"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /datalogic/payments (btrz-api-payments). See get-payments-handler getSpec().
 * @typedef {Object} DatalogicPaymentsListQuery
 * @property {string} [referenceNumber] - The payment reference number
 */

/**
 * Factory for Datalogic API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ payments: Object, referenceNumber: Object, authCode: Object }}
 */


function datalogicFactory(_ref) {
  var client = _ref.client;

  var payments = {
    /**
     * GET /datalogic/payments - list Datalogic payments.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {DatalogicPaymentsListQuery} [opts.query] - Query params (referenceNumber)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all: function all(_ref2) {
      var token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          headers = _ref2.headers,
          query = _ref2.query,
          internalAuthTokenProvider = _ref2.internalAuthTokenProvider;

      return client({
        url: "/datalogic/payments",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * POST /datalogic/payments/:referenceNumber - update Datalogic payment. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.referenceNumber - Reference number
     * @param {Object} [opts.data] - Request body
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref3) {
      var token = _ref3.token,
          jwtToken = _ref3.jwtToken,
          headers = _ref3.headers,
          query = _ref3.query,
          referenceNumber = _ref3.referenceNumber,
          data = _ref3.data,
          internalAuthTokenProvider = _ref3.internalAuthTokenProvider;

      return client({
        url: "/datalogic/payments/" + referenceNumber,
        method: "post",
        params: query,
        data: data,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * POST /datalogic/reverse/:referenceNumber - reverse Datalogic payment. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.referenceNumber - Reference number
     * @param {Object} [opts.data] - Request body
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    reverse: function reverse(_ref4) {
      var token = _ref4.token,
          jwtToken = _ref4.jwtToken,
          headers = _ref4.headers,
          query = _ref4.query,
          referenceNumber = _ref4.referenceNumber,
          data = _ref4.data,
          internalAuthTokenProvider = _ref4.internalAuthTokenProvider;

      return client({
        url: "/datalogic/reverse/" + referenceNumber,
        method: "post",
        params: query,
        data: data,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  var referenceNumber = {
    /**
     * GET /datalogic/reference-number - get reference number. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref5) {
      var token = _ref5.token,
          jwtToken = _ref5.jwtToken,
          headers = _ref5.headers,
          internalAuthTokenProvider = _ref5.internalAuthTokenProvider;

      return client({
        url: "/datalogic/reference-number",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  var authCode = {
    /**
     * GET /datalogic/auth-code - get auth code. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref6) {
      var token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          headers = _ref6.headers,
          internalAuthTokenProvider = _ref6.internalAuthTokenProvider;

      return client({
        url: "/datalogic/auth-code",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  return {
    payments: payments,
    referenceNumber: referenceNumber,
    authCode: authCode
  };
}

module.exports = datalogicFactory;