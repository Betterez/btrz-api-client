"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /promos (btrz-api-inventory). See get-promos getSpec().
 * @typedef {Object} PromosListQuery
 * @property {string} [providerIds] - Provider IDs to get promos for
 * @property {string} [productId] - Product id
 * @property {string} [productIds] - Comma-separated product IDs (mutually exclusive with productId)
 * @property {string} [promoCode] - Promo internal id
 * @property {string} [name] - Promo name
 * @property {string} [campaign] - Campaign the promo belongs to
 * @property {string} [origin] - Departure station name
 * @property {string} [destination] - Destination station name
 * @property {string} [fareIds] - Comma-separated fare IDs
 * @property {string} [tripType] - 'oneway' or 'roundtrip'
 * @property {string} [channels] - Filter by channels (mandatory if promoCode not given)
 * @property {boolean} [autoApply] - Filter only auto-applied promos
 * @property {string} [includeExpired] - Include expired promos (deprecated)
 * @property {string} [searchOutboundTravelDate] - Outbound travel date for validity
 * @property {string} [searchReturnTravelDate] - Return travel date for validity
 * @property {string} [qty] - Number of tickets
 * @property {number} [page] - Page for pagination
 * @property {string} [orderBy] - Field to order by
 * @property {string} [orderDir] - 'asc' (1) or 'desc' (-1)
 */

/**
 * Factory for promos API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, patch: function, remove: function, addRule: function, updateRule: function }}
 */


function promosFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /promos - list promos.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PromosListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/promos", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /promos/:promoId - get promo by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.promoId - Promo id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var promoId = _ref3.promoId,
        token = _ref3.token,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client.get("/promos/" + promoId, {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /promos - create promo. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.promo - Promo payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        promo = _ref4.promo,
        token = _ref4.token,
        headers = _ref4.headers;

    return client({
      url: "/promos",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { promo: promo }
    });
  }

  /**
   * DELETE /promos/:promoId - remove promo. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.promoId - Promo id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        promoId = _ref5.promoId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/promos/" + promoId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PATCH /promos/:promoId - update promo. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.promoId - Promo id
   * @param {Object} opts.update - Update payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  // eslint-disable-next-line no-shadow
  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        promoId = _ref6.promoId,
        update = _ref6.update,
        headers = _ref6.headers;

    return client({
      url: "/promos/" + promoId,
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { update: update }
    });
  }

  /**
   * PATCH /promo/:promoId - patch promo with operations. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.promoId - Promo id
   * @param {Object} opts.operations - Patch operations
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function patch(_ref7) {
    var jwtToken = _ref7.jwtToken,
        token = _ref7.token,
        promoId = _ref7.promoId,
        operations = _ref7.operations,
        headers = _ref7.headers;

    return client({
      url: "/promo/" + promoId,
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { operations: operations }
    });
  }

  /**
   * POST /promos/:promoId/rules - add promo rule. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.promoId - Promo id
   * @param {Object} opts.rule - Rule payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function addRule(_ref8) {
    var jwtToken = _ref8.jwtToken,
        token = _ref8.token,
        promoId = _ref8.promoId,
        rule = _ref8.rule,
        headers = _ref8.headers;

    return client({
      url: "/promos/" + promoId + "/rules",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { rule: rule }
    });
  }

  /**
   * PUT /promos/:promoId/rules/:ruleId - update promo rule. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.promoId - Promo id
   * @param {string} opts.ruleId - Rule id
   * @param {Object} opts.rule - Rule payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function updateRule(_ref9) {
    var jwtToken = _ref9.jwtToken,
        token = _ref9.token,
        promoId = _ref9.promoId,
        ruleId = _ref9.ruleId,
        rule = _ref9.rule,
        headers = _ref9.headers;

    return client({
      url: "/promos/" + promoId + "/rules/" + ruleId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { rule: rule }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    patch: patch,
    remove: remove,
    addRule: addRule,
    updateRule: updateRule
  };
}

module.exports = promosFactory;