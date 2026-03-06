/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
function undeliveredFactory({client, internalAuthTokenProvider}) {
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
  function all({token, jwtToken, context, query = {}, headers}) {
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
  function getById({token, jwtToken, id, headers}) {
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
  function patch({token, jwtToken, operation, headers}) {
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
  function resend({token, jwtToken, id, headers}) {
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
  function resendAll({token, jwtToken, headers}) {
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
  function deleteById({token, jwtToken, id, headers}) {
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
  function deleteAll({token, jwtToken, headers}) {
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
