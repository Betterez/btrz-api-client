const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /amenity-groups (btrz-api-inventory). See get-amenity-groups getSpec().
 * @typedef {Object} AmenityGroupsListQuery
 * @property {string} [name] - Filter by name
 * @property {string} [amenityId] - Filter by amenity ID
 * @property {string} [enabled] - Filter by enabled status
 * @property {number} [page] - Page for pagination
 * @property {number} [pageSize] - Results per page
 */

/**
 * Factory for amenity-groups API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function }}
 */
function amenityGroupsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /amenity-groups - list amenity groups.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {AmenityGroupsListQuery} [opts.query] - Query params (name, amenityId, enabled, page, pageSize)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client.get("/amenity-groups", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /amenity-groups/:amenityGroupId - get amenity group by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.amenityGroupId - Amenity group id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, amenityGroupId, query = {}, headers}) {
    return client.get(`/amenity-groups/${amenityGroupId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /amenity-groups - create amenity group. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.amenityGroup - Amenity group payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, amenityGroup, headers}) {
    return client({
      url: "/amenity-groups",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {amenityGroup}
    });
  }

  /**
   * PUT /amenity-groups/:amenityGroupId - update amenity group. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.amenityGroupId - Amenity group id
   * @param {Object} opts.amenityGroup - Amenity group payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, amenityGroupId, amenityGroup, headers}) {
    return client({
      url: `/amenity-groups/${amenityGroupId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {amenityGroup}
    });
  }

  return {
    all,
    get,
    create,
    update
  };
}

module.exports = amenityGroupsFactory;
