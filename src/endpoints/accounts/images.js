/* eslint-disable import/extensions */
const {authorizationHeaders} = require("./../endpoints_helpers");

/**
 * Factory for images API (btrz-api-accounts). Account images (url-based). POST/DELETE require BETTEREZ_APP.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, remove: function }}
 */
function ImagesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /images – List images for the account (paginated). Query: page.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.query] - Optional query (e.g. page for pagination)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ images: object[], totalRecords: number, ... }>>}
   */
  function all({token, jwtToken, query = {}, headers}) {
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
  function get({token, jwtToken, query = {}, headers, imageId}) {
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
  function create({jwtToken, token, image, headers}) {
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
  function remove({imageId, token, jwtToken, headers}) {
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
