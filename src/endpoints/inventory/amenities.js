const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /amenities (btrz-api-inventory). See get-amenities getSpec().
 * @typedef {Object} AmenitiesListQuery
 * @property {string} [name] - Filter by name
 * @property {string} [amenityId] - Filter by amenity ID
 * @property {string} [enabled] - Filter by enabled status
 * @property {number} [page] - Page for pagination
 */

/**
 * Factory for amenities API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function }}
 */
function amenitiesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /amenities - list amenities.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {AmenitiesListQuery} [opts.query] - Query params (name, amenityId, enabled, page)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client.get("/amenities", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /amenities/:amenityId - get amenity by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.amenityId - Amenity id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, amenityId, query = {}, headers}) {
    return client.get(`/amenities/${amenityId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /amenities - create amenity. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.amenity - Amenity payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, amenity, headers}) {
    return client({
      url: "/amenities",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {amenity}
    });
  }

  /**
   * PUT /amenities/:amenityId - update amenity. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.amenityId - Amenity id
   * @param {Object} opts.amenity - Amenity payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, amenityId, amenity, headers}) {
    return client({
      url: `/amenities/${amenityId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {amenity}
    });
  }

  return {
    all,
    get,
    create,
    update
  };
}

module.exports = amenitiesFactory;
