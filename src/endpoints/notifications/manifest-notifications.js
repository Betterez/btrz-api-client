const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for GET /manifest-notifications (btrz-api-notifications). See get-manifest-notifications-handler getSpec().
 * @typedef {Object} ManifestNotificationsListQuery
 * @property {string} [manifestId] - Manifest id (ObjectId format)
 */

/**
 * Factory for manifest-notifications API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, all: function }}
 */
function manifestNotificationsFactory({
  client,
  internalAuthTokenProvider
}) {
  /**
   * POST /manifest-notifications - create a manifest notification.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ManifestNotificationsQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({
    token, jwtToken, query = {}, data, headers
  }) {
    return client({
      url: "/manifest-notifications",
      method: "post",
      params: query,
      data,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /manifest-notifications - list manifest notifications.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {ManifestNotificationsListQuery} [opts.query] - Query params (manifestId optional)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/manifest-notifications", {
      params: query,
      headers: authorizationHeaders({
        token,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  return {
    create,
    all
  };
}

module.exports = manifestNotificationsFactory;
