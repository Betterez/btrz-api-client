

/* eslint-disable import/extensions */
const _require = require("./../endpoints_helpers");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for images API (btrz-api-accounts). Account images (url-based). POST/DELETE require BETTEREZ_APP.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, remove: function }}
 */


function ImagesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /images – List images for the account (paginated). Query: page.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.query] - Optional query (e.g. page for pagination)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ images: object[], totalRecords: number, ... }>>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      params: query,
      url: "/images",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /images/:imageId – Get a single image by id (24 hex ObjectId).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.imageId - Image id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ image: object }>>}
   */
  function get(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;
    const imageId = _ref3.imageId;

    return client({
      params: query,
      url: `/images/${imageId}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /images – Create an image. Requires BETTEREZ_APP JWT. Body: { image } with url required. Emits images.created.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT (BETTEREZ_APP audience)
   * @param {Object} opts.image - { url } (required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ image: object }>>}
   */
  function create(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const image = _ref4.image;
    const headers = _ref4.headers;

    return client({
      url: "/images",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        image
      }
    });
  }

  /**
   * DELETE /images/:imageId – Delete an image. Requires BETTEREZ_APP JWT. Emits images.deleted (data: { imageId }).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.imageId - Image id (24 hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ imageId: string }>>}
   */
  function remove(_ref5) {
    const imageId = _ref5.imageId;
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const headers = _ref5.headers;

    return client({
      url: `/images/${imageId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  return {
    all,
    get,
    create,
    remove
  };
}

module.exports = ImagesFactory;
