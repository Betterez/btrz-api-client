"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /fees (btrz-api-inventory). See fees get-handler getSpec().
 * @typedef {Object} InventoryFeesQuery
 * @property {string} [providerIds] - Provider IDs to get fees for
 * @property {string} [rules] - Rules where the fees apply
 * @property {string} [productId] - Product ID for the fee
 * @property {string} [internalId] - Fee internal id
 */

/**
 * Factory for fees API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function }}
 */


function feesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /fees - list fees (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InventoryFeesQuery} [opts.query] - Query params (providerIds, rules, productId, internalId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fees: Array, next?: string, previous?: string, count: number }>>}
   * @throws When response is 4xx/5xx (401, 500)
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/fees", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /fees/:feeId - get fee by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.feeId - Fee id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fee: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 404 FEE_NOT_FOUND, 500)
   */
  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        feeId = _ref3.feeId,
        headers = _ref3.headers;

    return client.get("/fees/" + feeId, {
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /fees - create fee.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.fee - Fee payload (FeePostData: name, internalId, valueType, value, rules, products, lexiconKeys, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fee: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 409 CANNOT_CREATE_LEXICON_ENTRIES, 500)
   */
  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        fee = _ref4.fee,
        headers = _ref4.headers;

    return client({
      url: "/fees",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { fee: fee }
    });
  }

  /**
   * PUT /fees/:feeId - update fee.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.feeId - Fee id
   * @param {Object} opts.fee - Fee payload (partial FeePostData)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fee: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 404 FEE_NOT_FOUND, 409 CANNOT_UPDATE_LEXICON_ENTRIES, 500)
   */
  function update(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        feeId = _ref5.feeId,
        fee = _ref5.fee,
        headers = _ref5.headers;

    return client({
      url: "/fees/" + feeId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { fee: fee }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update
  };
}

module.exports = feesFactory;