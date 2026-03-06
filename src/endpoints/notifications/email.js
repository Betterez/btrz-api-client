const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for POST /email (btrz-api-notifications). Define recipient, template, etc. Forwarded to API as-is.
 * @typedef {Object} NotificationsEmailPostQuery
 */

/**
 * Factory for email API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */
function emailFactory({
  client, internalAuthTokenProvider
}) {
  /**
   * POST /email - send email (query params define recipient/template etc.).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {NotificationsEmailPostQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({
    token, jwtToken, query = {}, headers
  }) {
    return client({
      url: "/email",
      method: "post",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    create
  };
}

module.exports = emailFactory;
