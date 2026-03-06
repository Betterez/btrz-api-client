"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for zone-prices endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryZonePricesQuery
 */

/**
 * Factory for zone-prices API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function zonePriceFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /zone-prices - list zone prices.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {InventoryZonePricesQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/zone-prices", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /zone-prices/:zonePriceId - get zone price by id.
   * @param {Object} opts
   * @param {string} opts.zonePriceId - Zone price id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var zonePriceId = _ref3.zonePriceId,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/zone-prices/" + zonePriceId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /zone-prices - create zone price.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {Object} opts.zonePrice - Zone price payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        zonePrice = _ref4.zonePrice,
        headers = _ref4.headers;

    return client({
      url: "/zone-prices",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        zonePrice: zonePrice
      }
    });
  }

  /**
   * DELETE /zone-prices/:zonePriceId - remove zone price.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.zonePriceId - Zone price id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        zonePriceId = _ref5.zonePriceId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/zone-prices/" + zonePriceId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /zone-prices/:zonePriceId - update zone price.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.zonePriceId - Zone price id
   * @param {Object} opts.zonePrice - Zone price payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        zonePriceId = _ref6.zonePriceId,
        zonePrice = _ref6.zonePrice,
        headers = _ref6.headers;

    return client({
      url: "/zone-prices/" + zonePriceId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        zonePrice: zonePrice
      }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    remove: remove
  };
}

module.exports = zonePriceFactory;