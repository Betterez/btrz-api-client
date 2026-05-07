

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /parcel-zones (btrz-api-inventory). See get-parcel-zones getSpec().
 * @typedef {Object} ParcelZonesListQuery
 * @property {string} [providerIds] - Provider IDs to get parcel zones for
 */

/**
 * Factory for parcel-zones API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function }}
 */


function parcelZonesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /parcel-zones - list parcel zones.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {ParcelZonesListQuery} [opts.query] - Query params (providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client("/parcel-zones", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /parcel-zones - create parcel zone. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.parcelZone - Parcel zone payload
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref3) {
    const token = _ref3.token;
    const parcelZone = _ref3.parcelZone;
    const jwtToken = _ref3.jwtToken;
    const headers = _ref3.headers;

    return client({
      url: "/parcel-zones",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {parcelZone}
    });
  }

  /**
   * PUT /parcel-zone/:parcelZoneId - update parcel zone. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.parcelZoneId - Parcel zone id
   * @param {Object} opts.parcelZone - Parcel zone payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const parcelZoneId = _ref4.parcelZoneId;
    const parcelZone = _ref4.parcelZone;
    const headers = _ref4.headers;

    return client({
      url: `/parcel-zone/${parcelZoneId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {parcelZone}
    });
  }

  return {
    all,
    create,
    update
  };
}

module.exports = parcelZonesFactory;
