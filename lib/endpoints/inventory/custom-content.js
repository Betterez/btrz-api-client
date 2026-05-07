

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

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


function customContentFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /custom-content — List custom content (paginated). Query: enabled, pageId.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {InventoryCustomContentQuery} [opts.query] - Query params (enabled, pageId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ customContent: Object[] }>>}
   * @throws 401 Unauthorized
   * @throws 500 Internal server error
   */
  function all(_ref2) {
    const token = _ref2.token;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/custom-content", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /custom-content/:customContentId — Get custom content by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth
   * @param {string} opts.customContentId - Custom content id (24 hex)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ customContent: Object }>>}
   * @throws 400 INVALID_CUSTOMCONTENT_ID
   * @throws 401 Unauthorized
   * @throws 404 CUSTOMCONTENT_NOT_FOUND
   * @throws 500 Internal server error
   */
  function get(_ref3) {
    const customContentId = _ref3.customContentId;
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const headers = _ref3.headers;

    return client.get(`/custom-content/${customContentId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /custom-content — Create custom content. Body: { customContent }. Emits customContent.created.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth
   * @param {Object} opts.customContent - CustomContentPost (name, pageId, lang required; at least one of title, text, imgUrl, mainUrl)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ customContent: Object }>>}
   * @throws 400 WRONG_DATA, INVALID_CUSTOMCONTENT
   * @throws 401 Unauthorized
   * @throws 500 Internal server error
   */
  function create(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const customContent = _ref4.customContent;
    const headers = _ref4.headers;

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
   * DELETE /custom-content/:customContentId — Delete custom content. Emits customContent.deleted.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth
   * @param {string} opts.customContentId - Custom content id (24 hex)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ customContentId: string }>>}
   * @throws 400 CUSTOMCONTENT_TERMINAL_ID, WRONG_DATA
   * @throws 401 Unauthorized
   * @throws 404 CUSTOMCONTENT_NOT_FOUND
   * @throws 500 Internal server error
   */
  function remove(_ref5) {
    const jwtToken = _ref5.jwtToken;
    const customContentId = _ref5.customContentId;
    const token = _ref5.token;
    const headers = _ref5.headers;

    return client({
      url: `/custom-content/${customContentId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /custom-content/:customContentId — Update custom content. Body: { customContent }. Emits customContent.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth
   * @param {string} opts.customContentId - Custom content id (24 hex)
   * @param {Object} opts.customContent - CustomContentPost (at least one of title, text, imgUrl for update)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ customContent: Object }>>}
   * @throws 400 WRONG_DATA, INVALID_CUSTOMCONTENT_UPDATE
   * @throws 401 Unauthorized
   * @throws 404 CUSTOMCONTENT_NOT_FOUND
   * @throws 500 Internal server error
   */
  function update(_ref6) {
    const jwtToken = _ref6.jwtToken;
    const token = _ref6.token;
    const customContentId = _ref6.customContentId;
    const customContent = _ref6.customContent;
    const headers = _ref6.headers;

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
