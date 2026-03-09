"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /financing-costs (btrz-api-inventory). See get-financing-costs getSpec().
 * @typedef {Object} FinancingCostsListQuery
 * @property {number} [page] - Page number
 * @property {string} [providerId] - Provider to get financing costs for
 */

/**
 * Query params for GET /financing-costs/:id (btrz-api-inventory). See get-financing-cost-by-id getSpec().
 * @typedef {Object} FinancingCostGetQuery
 * @property {string} [providerId] - Provider to get financing cost for
 */

/**
 * Factory for financing-costs API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function financingCostsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /financing-costs - list financing costs (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {FinancingCostsListQuery} [opts.query] - Query params (page, providerId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ financingcosts: Array, next: string, previous: string, count: number }>>}
   * @throws When response is 4xx/5xx (400 INVALID_PAGE, 401, 500)
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/financing-costs", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /financing-costs/:id - get financing cost by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Financing cost id (24 hex characters)
   * @param {FinancingCostGetQuery} [opts.query] - Query params (providerId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ financingcost: Object }>>}
   * @throws When response is 4xx/5xx (400 INVALID_FINANCINGCOST_ID, 401, 404 FINANCINGCOST_NOT_FOUND, 500)
   */
  function get(_ref3) {
    var id = _ref3.id,
        token = _ref3.token,
        headers = _ref3.headers,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query;

    return client.get("/financing-costs/" + id, {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /financing-costs - create financing cost.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.financingCost - Financing cost (name, internalId, currencyCode, dow, creditCard, maxQuota, interest, enabled)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ financingcost: Object }>>}
   * @throws When response is 4xx/5xx (400 WRONG_DATA, 401, 409 duplicated internalId, 500)
   */
  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        financingCost = _ref4.financingCost,
        headers = _ref4.headers;

    return client({
      url: "/financing-costs",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        financingcost: financingCost
      }
    });
  }

  /**
   * DELETE /financing-costs/:id - remove financing cost.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Financing cost id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ financingcostId: string }>>}
   * @throws When response is 4xx/5xx (400 INVALID_FINANCINGCOST_ID, 401, 404 FINANCINGCOST_NOT_FOUND, 500)
   */
  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        id = _ref5.id,
        token = _ref5.token,
        headers = _ref5.headers,
        _ref5$query = _ref5.query,
        query = _ref5$query === undefined ? {} : _ref5$query;

    return client({
      url: "/financing-costs/" + id,
      method: "delete",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /financing-costs/:id - update financing cost.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Financing cost id (24 hex characters)
   * @param {Object} opts.financingCost - Financing cost (name, internalId, currencyCode, dow, creditCard, maxQuota, interest, enabled)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ financingcost: Object }>>}
   * @throws When response is 4xx/5xx (400 WRONG_DATA, 401, 404 not found, 409 duplicated internalId, 500)
   */
  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        id = _ref6.id,
        financingCost = _ref6.financingCost,
        headers = _ref6.headers;

    return client({
      url: "/financing-costs/" + id,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        financingcost: financingCost
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

module.exports = financingCostsFactory;