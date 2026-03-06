const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for POST /email (btrz-api-notifications). See post-emails getSpec().
 * @typedef {Object} NotificationsEmailPostQuery
 * @property {string} trxId - Cart/transaction id to send by email (required)
 * @property {string} [lang] - Email language (e.g. en-us, es-ar, de-de, fr-fr, nl-nl)
 * @property {string} [channel] - Channel of the request
 * @property {string} [appName] - App name of the request
 * @property {string} [customEmail] - Email address different than customer.email (backoffice only)
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
   * POST /email - send email to customer for the given cart (trxId).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {NotificationsEmailPostQuery} [opts.query] - Query params (trxId required)
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
