const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

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
function customersFactory({
  client, internalAuthTokenProvider
}) {
  /**
   * POST /customers/reset - send reset password email to customer.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {NotificationsCustomersQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function sendResetPasswordEmail({
    token, jwtToken, query = {}, headers
  }) {
    return client({
      url: "/customers/reset",
      method: "post",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
  function sendActivationEmail({
    token, query = {}, data, headers
  }) {
    return client({
      url: "/customers/activation",
      method: "post",
      params: query,
      data,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    sendResetPasswordEmail,
    sendActivationEmail
  };
}

module.exports = customersFactory;
