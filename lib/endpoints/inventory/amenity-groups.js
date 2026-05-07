

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

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


function amenityGroupsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /amenity-groups - list amenity groups.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {AmenityGroupsListQuery} [opts.query] - Query params (name, amenityId, enabled, page, pageSize)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

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
  function get(_ref3) {
    const token = _ref3.token;
    const amenityGroupId = _ref3.amenityGroupId;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

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
  function create(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const amenityGroup = _ref4.amenityGroup;
    const headers = _ref4.headers;

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
  function update(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const amenityGroupId = _ref5.amenityGroupId;
    const amenityGroup = _ref5.amenityGroup;
    const headers = _ref5.headers;

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
