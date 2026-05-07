"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /insurances (btrz-api-inventory). See get-insurances getSpec().
 * @typedef {Object} InsurancesListQuery
 * @property {string} [productId] - The ids of the products to get insurances for
 * @property {string} [enabled] - Filter insurances if they are enabled or not [true, false]
 * @property {string} [providerIds] - The ids of the providers to get products for
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
   * GET /insurances - list insurances for the account and product provided.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {InsurancesListQuery} [opts.query] - Query params (productId, enabled, providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ insurances: Object[] }>>}
   * @throws 400 INVALID_PRODUCTIDS; 401; 500.
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
   * @param {string} opts.insuranceId - Insurance id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ insurance: Object }>>}
   * @throws 400 INVALID_INSURANCE_ID; 401; 404 INSURANCE_NOT_FOUND; 500.
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
   * POST /insurances - create insurance. API does not accept query params.
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
   * @returns {Promise<import("axios").AxiosResponse<{ insurance: Object }>>}
   * @throws 400 WRONG_DATA; 401; 404 INSURANCE_NOT_FOUND; 500.
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
   * @param {string} opts.insuranceId - Insurance id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ insuranceId: string }>>}
   * @throws 400 INVALID_INSURANCE_ID; 401; 404 INSURANCE_NOT_FOUND; 500.
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