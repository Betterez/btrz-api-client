const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for GET /agency-types (btrz-api-accounts).
 * @typedef {Object} AgencyTypesListQuery
 * @property {number} [page] - The page number to retrieve (positive integer)
 */

/**
 * Factory for agency-types API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
function agencyTypesFactory({
  client,
  internalAuthTokenProvider
}) {
  /**
   * GET /agency-types - list agency types for the account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {AgencyTypesListQuery} [opts.query] - Query params (page)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/agency-types", {
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
   * GET /agency-types/:agencyTypeId - get an agency type by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.agencyTypeId - Agency type id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({
    token,
    jwtToken,
    agencyTypeId,
    headers
  }) {
    return client({
      url: `/agency-types/${agencyTypeId}`,
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  /**
   * POST /agency-types - create an agency type.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.agencyType - Agency type payload (name required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({
    token,
    jwtToken,
    agencyType,
    headers
  }) {
    return client({
      url: "/agency-types",
      method: "post",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        agencyType
      }
    });
  }

  /**
   * PUT /agency-types/:agencyTypeId - update an agency type.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.agencyTypeId - Agency type id (24-char hex ObjectId)
   * @param {Object} opts.agencyType - Agency type payload (name required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({
    token,
    jwtToken,
    agencyTypeId,
    agencyType,
    headers
  }) {
    return client({
      url: `/agency-types/${agencyTypeId}`,
      method: "put",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        agencyType
      }
    });
  }

  /**
   * DELETE /agency-types/:agencyTypeId - delete an agency type.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.agencyTypeId - Agency type id (24-char hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({
    token,
    jwtToken,
    agencyTypeId,
    headers
  }) {
    return client({
      url: `/agency-types/${agencyTypeId}`,
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
module.exports = agencyTypesFactory;