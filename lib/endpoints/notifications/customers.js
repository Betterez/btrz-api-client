"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for customers notification endpoints (btrz-api-notifications). Forwarded to API as-is.
 * @typedef {Object} NotificationsCustomersQuery
 */

/**
 * Factory for customers notifications API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ sendResetPasswordEmail: function, sendActivationEmail: function }}
 */


function customersFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /customers/reset - send reset password email to customer.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {NotificationsCustomersQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function sendResetPasswordEmail(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/customers/reset",
      method: "post",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /customers/activation - send activation email to customer.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {NotificationsCustomersQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.data] - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function sendActivationEmail(_ref3) {
    var token = _ref3.token,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        data = _ref3.data,
        headers = _ref3.headers;

    return client({
      url: "/customers/activation",
      method: "post",
      params: query,
      data: data,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    sendResetPasswordEmail: sendResetPasswordEmail,
    sendActivationEmail: sendActivationEmail
  };
}

module.exports = customersFactory;