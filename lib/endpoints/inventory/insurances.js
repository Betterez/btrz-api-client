"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for insurances endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryInsurancesQuery
 */

/**
 * Factory for insurances API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, get: function, update: function, remove: function }}
 */


function insurancesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /insurances - list insurances.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {InventoryInsurancesQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/insurances", {
      params: query,
      headers: authorizationHeaders({
        token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  /**
   * GET /insurances/:insuranceId - get insurance by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.insuranceId - Insurance id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var token = _ref3.token,
        insuranceId = _ref3.insuranceId,
        headers = _ref3.headers;

    return client.get("/insurances/" + insuranceId, {
      headers: authorizationHeaders({
        token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  /**
   * POST /insurances - create insurance.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.insurance - Insurance payload
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    var token = _ref4.token,
        insurance = _ref4.insurance,
        jwtToken = _ref4.jwtToken,
        headers = _ref4.headers;

    return client({
      url: "/insurances",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        insurance: insurance
      }
    });
  }

  /**
   * PUT /insurances/:insuranceId - update insurance.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.insurance - Insurance payload
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.insuranceId - Insurance id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref5) {
    var token = _ref5.token,
        insurance = _ref5.insurance,
        jwtToken = _ref5.jwtToken,
        insuranceId = _ref5.insuranceId,
        headers = _ref5.headers;

    return client({
      url: "/insurances/" + insuranceId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        insurance: insurance
      }
    });
  }

  /**
   * DELETE /insurances/:insuranceId - remove insurance.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.insuranceId - Insurance id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        insuranceId = _ref6.insuranceId,
        headers = _ref6.headers;

    return client({
      url: "/insurances/" + insuranceId,
      method: "delete",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  return {
    all: all,
    create: create,
    get: get,
    update: update,
    remove: remove
  };
}

module.exports = insurancesFactory;