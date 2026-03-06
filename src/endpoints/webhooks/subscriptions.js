const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
function subscriptionsFactory({client, internalAuthTokenProvider}) {
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
  function all({token, jwtToken, context, query = {}, headers}) {
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
  function getById({token, jwtToken, id, headers}) {
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
  function create({token, jwtToken, subscription, headers}) {
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
  function put({token, jwtToken, id, subscription, headers}) {
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
  function deleteById({token, jwtToken, id, headers}) {
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
