const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /custom-content (btrz-api-inventory). See get-custom-contents getSpec().
 * @typedef {Object} InventoryCustomContentQuery
 * @property {string} [enabled] - Filter by enabled (true, false)
 * @property {string} [pageId] - The page for the content
 */

/**
 * Factory for custom-content API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
function customContentFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /custom-content - list custom content.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InventoryCustomContentQuery} [opts.query] - Query params (enabled, pageId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/custom-content", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /custom-content/:customContentId - get custom content by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.customContentId - Custom content id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({customContentId, token, headers}) {
    return client.get(`/custom-content/${customContentId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /custom-content - create custom content. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.customContent - Custom content payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({jwtToken, token, customContent, headers}) {
    return client({
      url: "/custom-content",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        customContent
      }
    });
  }

  /**
   * DELETE /custom-content/:customContentId - remove custom content. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.customContentId - Custom content id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({jwtToken, customContentId, token, headers}) {
    return client({
      url: `/custom-content/${customContentId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /custom-content/:customContentId - update custom content. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.customContentId - Custom content id
   * @param {Object} opts.customContent - Custom content payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, customContentId, customContent, headers}) {
    return client({
      url: `/custom-content/${customContentId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        customContent
      }
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

module.exports = customContentFactory;
