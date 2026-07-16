const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for GET /authorized-external-messaging (btrz-api-accounts).
 * @typedef {Object} AuthorizedExternalMessagingListQuery
 * @property {number} [page] - The page number to retrieve (positive integer)
 * @property {string} [email] - Filter by email prefix (starts with), case-insensitive
 */

/**
 * Factory for authorized-external-messaging API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
function authorizedExternalMessagingFactory({
  client,
  internalAuthTokenProvider
}) {
  /**
   * GET /authorized-external-messaging - list authorized external messaging entries for the account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {AuthorizedExternalMessagingListQuery} [opts.query] - Query params (page, email)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/authorized-external-messaging", {
      params: query,
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  /**
   * GET /authorized-external-messaging/:authorizedExternalMessagingId - get an entry by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.authorizedExternalMessagingId - Entry id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({
    token,
    jwtToken,
    authorizedExternalMessagingId,
    headers
  }) {
    return client({
      url: `/authorized-external-messaging/${authorizedExternalMessagingId}`,
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  /**
   * POST /authorized-external-messaging - create an authorized external messaging entry.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.authorizedExternalMessaging - Entry payload (email required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({
    token,
    jwtToken,
    authorizedExternalMessaging,
    headers
  }) {
    return client({
      url: "/authorized-external-messaging",
      method: "post",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        authorizedExternalMessaging
      }
    });
  }

  /**
   * PUT /authorized-external-messaging/:authorizedExternalMessagingId - update an entry.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.authorizedExternalMessagingId - Entry id (24-char hex ObjectId)
   * @param {Object} opts.authorizedExternalMessaging - Entry payload (email required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({
    token,
    jwtToken,
    authorizedExternalMessagingId,
    authorizedExternalMessaging,
    headers
  }) {
    return client({
      url: `/authorized-external-messaging/${authorizedExternalMessagingId}`,
      method: "put",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        authorizedExternalMessaging
      }
    });
  }

  /**
   * DELETE /authorized-external-messaging/:authorizedExternalMessagingId - delete an entry.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.authorizedExternalMessagingId - Entry id (24-char hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({
    token,
    jwtToken,
    authorizedExternalMessagingId,
    headers
  }) {
    return client({
      url: `/authorized-external-messaging/${authorizedExternalMessagingId}`,
      method: "delete",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
    });
  }
  return {
    all,
    get,
    create,
    update,
    remove
  };
}
module.exports = authorizedExternalMessagingFactory;