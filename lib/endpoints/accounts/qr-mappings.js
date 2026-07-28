const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for GET /qr-mappings (btrz-api-accounts). See get-handler getSpec().
 * @typedef {Object} QrMappingsListQuery
 * @property {number} [page] - 1-based page for pagination
 */

/**
 * Factory for qr-mappings API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, all: function, create: function, update: function, remove: function }}
 */
function qrMappingsFactory({
  client,
  internalAuthTokenProvider
}) {
  /**
   * GET /qr-mappings/:qrMappingId - get a QR mapping.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.qrMappingId - QR mapping id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({
    token,
    jwtToken,
    qrMappingId,
    headers
  }) {
    return client({
      url: `/qr-mappings/${qrMappingId}`,
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  /**
   * GET /qr-mappings - list QR mappings (paginated when page is provided).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {QrMappingsListQuery} [opts.query] - Query params (page)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client({
      url: "/qr-mappings",
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
   * POST /qr-mappings - create a QR mapping.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - QR mapping payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({
    token,
    jwtToken,
    data,
    headers
  }) {
    return client({
      url: "/qr-mappings",
      method: "post",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data
    });
  }

  /**
   * PUT /qr-mappings/:qrMappingId - update a QR mapping.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.qrMappingId - QR mapping id (ObjectId)
   * @param {Object} opts.data - QR mapping payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({
    token,
    jwtToken,
    qrMappingId,
    data,
    headers
  }) {
    return client({
      url: `/qr-mappings/${qrMappingId}`,
      method: "put",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data
    });
  }

  /**
   * DELETE /qr-mappings/:qrMappingId - delete a QR mapping.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.qrMappingId - QR mapping id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({
    qrMappingId,
    token,
    jwtToken,
    headers
  }) {
    return client({
      url: `/qr-mappings/${qrMappingId}`,
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
    get,
    all,
    create,
    update,
    remove
  };
}
module.exports = qrMappingsFactory;