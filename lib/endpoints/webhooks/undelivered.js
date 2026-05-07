

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /undelivered (btrz-api-notifications). context can also be passed via opts.context and is merged into query.
 * @typedef {Object} WebhookUndeliveredListQuery
 * @property {string} [context] - Context filter (also accepted as opts.context)
 */

/**
 * Factory for undelivered webhooks API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, getById: function, patch: function, resend: function, resendAll: function, deleteById: function, deleteAll: function }}
 */


function undeliveredFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /undelivered - list undelivered webhooks.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.context] - Context filter (merged into query)
   * @param {WebhookUndeliveredListQuery} [opts.query] - Optional query params (context merged from opts.context)
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
      url: "/undelivered",
      params: queryObj,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /undelivered/:id - get undelivered webhook by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Undelivered id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getById(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const id = _ref3.id;
    const headers = _ref3.headers;

    return client({
      url: `/undelivered/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PATCH /undelivered - patch undelivered.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.operation - Patch operation
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function patch(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const operation = _ref4.operation;
    const headers = _ref4.headers;

    return client({
      url: "/undelivered",
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: operation
    });
  }

  /**
   * PUT /undelivered/:id/retry - resend undelivered webhook.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Undelivered id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function resend(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const id = _ref5.id;
    const headers = _ref5.headers;

    return client({
      url: `/undelivered/${id}/retry`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /undelivered/retry-all - resend all undelivered webhooks.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function resendAll(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const headers = _ref6.headers;

    return client({
      url: "/undelivered/retry-all",
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * DELETE /undelivered/:id - delete undelivered webhook by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Undelivered id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function deleteById(_ref7) {
    const token = _ref7.token;
    const jwtToken = _ref7.jwtToken;
    const id = _ref7.id;
    const headers = _ref7.headers;

    return client({
      url: `/undelivered/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * DELETE /undelivered/batch-all - delete all undelivered webhooks.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function deleteAll(_ref8) {
    const token = _ref8.token;
    const jwtToken = _ref8.jwtToken;
    const headers = _ref8.headers;

    return client({
      url: "/undelivered/batch-all",
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    getById,
    patch,
    resend,
    resendAll,
    deleteById,
    deleteAll
  };
}

module.exports = undeliveredFactory;
