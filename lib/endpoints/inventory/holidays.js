"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /holidays (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} HolidaysListQuery
 * @property {number} [page] - The page number to retrieve
 * @property {string} [providerId] - Provider (account) id to list holidays for
 */

/**
 * Factory for holidays API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function holidaysFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /holidays - list holidays (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {HolidaysListQuery} [opts.query] - Query params (page, providerId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ holidays: Object[], next?: string, previous?: string, count: number }>>}
   * @throws 400 INVALID_PAGE; 401; 500.
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/holidays", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /holidays/:holidayId - get holiday by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.holidayId - Holiday id (24 hex characters)
   * @param {{ providerId?: string }} [opts.query] - Optional providerId
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ holiday: Object }>>}
   * @throws 400 INVALID_HOLIDAY_ID, INVALID_PROVIDER_ID; 401; 404 HOLIDAY_NOT_FOUND; 500.
   */
  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        holidayId = _ref3.holidayId,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/holidays/" + holidayId,
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query
    });
  }

  /**
   * POST /holidays - create holiday.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.holiday - Holiday payload (day, month, year required; name, blackout, recurring, externalId optional)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ holiday: Object }>>}
   * @throws 400 WRONG_DATA; 401; 500.
   */
  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        holiday = _ref4.holiday,
        headers = _ref4.headers;

    return client({
      url: "/holidays",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { holiday: holiday }
    });
  }

  /**
   * PUT /holidays/:holidayId - update holiday.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.holidayId - Holiday id
   * @param {Object} opts.holiday - Holiday payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ holiday: Object }>>}
   * @throws 400 WRONG_DATA, INVALID_HOLIDAY_ID; 401; 404 HOLIDAY_NOT_FOUND; 500.
   */
  function update(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        holidayId = _ref5.holidayId,
        holiday = _ref5.holiday,
        headers = _ref5.headers;

    return client({
      url: "/holidays/" + holidayId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { holiday: holiday }
    });
  }

  /**
   * DELETE /holidays/:holidayId - remove holiday.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.holidayId - Holiday id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ holidayId: string }>>}
   * @throws 400 INVALID_HOLIDAY_ID; 401; 404 HOLIDAY_NOT_FOUND; 500.
   */
  function remove(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        holidayId = _ref6.holidayId,
        headers = _ref6.headers;

    return client({
      url: "/holidays/" + holidayId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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

module.exports = holidaysFactory;