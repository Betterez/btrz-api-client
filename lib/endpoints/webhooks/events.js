

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /events (webhooks). Client merges opts.context into query.
 * @typedef {Object} WebhookEventsListQuery
 * @property {string} [context] - Context filter (merged from opts.context by client)
 */

/**
 * Factory for webhook events API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */


function eventsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /events - list webhook events. Query is merged with context (opts.context).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.context] - Context filter (merged into query)
   * @param {WebhookEventsListQuery} [opts.query] - Additional query params (merged with context)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const context = _ref2.context;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    const queryObj = Object.assign({}, query, {context});

    return client({
      url: "/events",
      params: queryObj,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = eventsFactory;
