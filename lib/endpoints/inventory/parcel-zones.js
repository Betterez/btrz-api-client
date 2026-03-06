"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for parcel-zones endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryParcelZonesQuery
 */

/**
 * Factory for parcel-zones API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function }}
 */


function parcelZonesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /parcel-zones - list parcel zones.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {InventoryParcelZonesQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client("/parcel-zones", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /parcel-zones - create parcel zone.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.parcelZone - Parcel zone payload
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref3) {
    var token = _ref3.token,
        parcelZone = _ref3.parcelZone,
        jwtToken = _ref3.jwtToken,
        headers = _ref3.headers;

    return client({
      url: "/parcel-zones",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { parcelZone: parcelZone }
    });
  }

  /**
   * PUT /parcel-zone/:parcelZoneId - update parcel zone.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.parcelZoneId - Parcel zone id
   * @param {Object} opts.parcelZone - Parcel zone payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        parcelZoneId = _ref4.parcelZoneId,
        parcelZone = _ref4.parcelZone,
        headers = _ref4.headers;

    return client({
      url: "/parcel-zone/" + parcelZoneId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { parcelZone: parcelZone }
    });
  }

  return {
    all: all,
    create: create,
    update: update
  };
}

module.exports = parcelZonesFactory;