

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /subscriptions (webhooks). Client merges opts.context into query.
 * @typedef {Object} WebhookSubscriptionsListQuery
 * @property {string} [context] - Context filter (merged from opts.context by client)
 */

/**
 * Factory for webhook subscriptions API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, getById: function, create: function, put: function, deleteById: function }}
 */


function subscriptionsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /subscriptions - list webhook subscriptions. Query is merged with context (opts.context).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.context] - Context filter (merged into query)
   * @param {WebhookSubscriptionsListQuery} [opts.query] - Additional query params (merged with context)
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
      url: "/subscriptions",
      params: queryObj,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /subscriptions/:id - get subscription by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Subscription id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getById(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const id = _ref3.id;
    const headers = _ref3.headers;

    return client({
      url: `/subscriptions/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /subscriptions - create webhook subscription.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.subscription - Subscription payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const subscription = _ref4.subscription;
    const headers = _ref4.headers;

    return client({
      url: "/subscriptions",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: subscription
    });
  }

  /**
   * PUT /subscriptions/:id - update subscription.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Subscription id
   * @param {Object} opts.subscription - Subscription payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function put(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const id = _ref5.id;
    const subscription = _ref5.subscription;
    const headers = _ref5.headers;

    return client({
      url: `/subscriptions/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: subscription
    });
  }

  /**
   * DELETE /subscriptions/:id - delete subscription by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Subscription id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function deleteById(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const id = _ref6.id;
    const headers = _ref6.headers;

    return client({
      url: `/subscriptions/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    create,
    getById,
    put,
    deleteById
  };
}

module.exports = subscriptionsFactory;
