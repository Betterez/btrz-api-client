"use strict";

/* eslint-disable import/extensions */
var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for images API (btrz-api-accounts). Account images (url-based). POST/DELETE require BETTEREZ_APP.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, remove: function }}
 */


function ImagesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      params: query,
      url: "/images",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers,
        imageId = _ref3.imageId;

    return client({
      params: query,
      url: "/images/" + imageId,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        image = _ref4.image,
        headers = _ref4.headers;

    return client({
      url: "/images",
      method: "post",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        image: image
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
    var imageId = _ref5.imageId,
        token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        headers = _ref5.headers;

    return client({
      url: "/images/" + imageId,
      method: "delete",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    remove: remove
  };
}

module.exports = ImagesFactory;