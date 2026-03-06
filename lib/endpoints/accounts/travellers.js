"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /travellers (btrz-api-accounts). See get-handler getSpec().
 * @typedef {Object} TravellersListQuery
 * @property {string} [customerId] - Filter by customer (ObjectId)
 * @property {number} [page] - Page number (1-based); if omitted results are not paginated
 * @property {string} [providerIds] - Provider ids for traveller card types
 */

/**
 * Query for PUT/DELETE/POST travellers (btrz-api-accounts). See put/delete/post handlers getSpec().
 * @typedef {Object} TravellerProviderIdsQuery
 * @property {string} [providerIds] - Provider ids to seek for customer, cards and fares
 */

/**
 * Factory for travellers API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, update: function, remove: function, create: function }}
 */


function travellersFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /travellers - list travellers for the account. See get-handler getSpec() in btrz-api-accounts.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {TravellersListQuery} [opts.query] - Query params (customerId, page, providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ travellers: Array, page?: number, count?: number }>>}
   *   Errors: 401, 404 (CUSTOMER_NOT_FOUND), 500
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        query = _ref2.query,
        headers = _ref2.headers;

    return client({
      url: "/travellers",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query
    });
  }

  /**
   * GET /travellers/:id - get a traveller by id. See get-by-id-handler getSpec() in btrz-api-accounts.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Traveller id (ObjectId)
   * @param {Object} [opts.query] - Optional query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ traveller: Object }>>}
   *   Errors: 400, 401, 404 (TRAVELLER_NOT_FOUND), 500
   */
  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        id = _ref3.id,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/travellers/" + id,
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query
    });
  }

  /**
   * PUT /travellers/:id - update a traveller. See put-handler getSpec() in btrz-api-accounts.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Traveller id (ObjectId)
   * @param {Object} opts.data - Traveller payload (TravellerPutData)
   * @param {TravellerProviderIdsQuery} [opts.query] - Query params (providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ traveller: Object }>>}
   *   Errors: 400, 401, 404, 409, 500
   */
  function update(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        id = _ref4.id,
        data = _ref4.data,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query,
        headers = _ref4.headers;

    return client({
      url: "/travellers/" + id,
      method: "put",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  /**
   * DELETE /travellers/:id - remove a traveller. Returns 204 No Content. See delete-handler getSpec().
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Traveller id (ObjectId)
   * @param {TravellerProviderIdsQuery} [opts.query] - Query params (providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<void>>}
   *   Errors: 400, 401, 404 (TRAVELLER_NOT_FOUND), 500
   */
  function remove(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        id = _ref5.id,
        _ref5$query = _ref5.query,
        query = _ref5$query === undefined ? {} : _ref5$query,
        headers = _ref5.headers;

    return client({
      url: "/travellers/" + id,
      method: "delete",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /travellers - create a traveller. Returns 201. See post-handler getSpec() in btrz-api-accounts.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Traveller payload (TravellerPostData: customerId, fareId, cards, etc.)
   * @param {TravellerProviderIdsQuery} [opts.query] - Query params (providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ traveller: Object }>>}
   *   Errors: 400, 401, 404, 409, 500
   */
  function create(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        _ref6$query = _ref6.query,
        query = _ref6$query === undefined ? {} : _ref6$query,
        data = _ref6.data,
        headers = _ref6.headers;

    return client({
      url: "/travellers",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query,
      data: data
    });
  }

  return {
    all: all,
    get: get,
    update: update,
    remove: remove,
    create: create
  };
}

module.exports = travellersFactory;