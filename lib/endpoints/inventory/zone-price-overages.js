"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for zone-price-overages API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function zonePriceOverageFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /zone-price-overages - list zone price overages. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/zone-price-overages", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /zone-price-overages/:zonePriceOverageId - get zone price overage by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} opts.zonePriceOverageId - Zone price overage id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var zonePriceOverageId = _ref3.zonePriceOverageId,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/zone-price-overages/" + zonePriceOverageId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /zone-price-overages - create zone price overage(s). API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {Object} opts.zonePriceOverages - Zone price overages payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        zonePriceOverages = _ref4.zonePriceOverages,
        headers = _ref4.headers;

    return client({
      url: "/zone-price-overages",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        zonePriceOverages: zonePriceOverages
      }
    });
  }

  /**
   * DELETE /zone-price-overages/:zonePriceOverageId - remove zone price overage.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.zonePriceOverageId - Zone price overage id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        zonePriceOverageId = _ref5.zonePriceOverageId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/zone-price-overages/" + zonePriceOverageId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /zone-price-overages/:zonePriceOverageId - update zone price overage. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.zonePriceOverageId - Zone price overage id
   * @param {Object} opts.zonePriceOverages - Zone price overages payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        zonePriceOverageId = _ref6.zonePriceOverageId,
        zonePriceOverages = _ref6.zonePriceOverages,
        headers = _ref6.headers;

    return client({
      url: "/zone-price-overages/" + zonePriceOverageId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        zonePriceOverages: zonePriceOverages
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

module.exports = zonePriceOverageFactory;