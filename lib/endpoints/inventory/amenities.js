"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

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


function amenitiesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /amenities - list amenities.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {AmenitiesListQuery} [opts.query] - Query params (name, amenityId, enabled, page)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/amenities", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
  function get(_ref3) {
    var token = _ref3.token,
        amenityId = _ref3.amenityId,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client.get("/amenities/" + amenityId, {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        amenity = _ref4.amenity,
        headers = _ref4.headers;

    return client({
      url: "/amenities",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { amenity: amenity }
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
  function update(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        amenityId = _ref5.amenityId,
        amenity = _ref5.amenity,
        headers = _ref5.headers;

    return client({
      url: "/amenities/" + amenityId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { amenity: amenity }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update
  };
}

module.exports = amenitiesFactory;