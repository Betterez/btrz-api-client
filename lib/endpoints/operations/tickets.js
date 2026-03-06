"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /tickets list (btrz-api-operations). providerId merged when opts.providerId set.
 * @typedef {Object} TicketsListQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for tickets API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} tickets API methods
 */


function ticketsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /tickets/:id - get ticket by id. API does not accept query params (btrz-api-operations).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Ticket id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        id = _ref2.id,
        headers = _ref2.headers,
        query = _ref2.query;

    return client({
      url: "/tickets/" + id,
      method: "get",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PATCH /tickets/:id - patch ticket.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Ticket id
   * @param {Object} opts.operations - JSON Patch operations
   * @param {boolean} [opts.warningsEnabled] - Whether to enable warnings
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function patch(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        id = _ref3.id,
        operations = _ref3.operations,
        warningsEnabled = _ref3.warningsEnabled,
        headers = _ref3.headers;

    return client({
      url: "/tickets/" + id,
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { operations: operations, warningsEnabled: warningsEnabled }
    });
  }

  /**
   * GET /tickets/:ticketId/companion-tickets - get companion tickets.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.ticketId - Ticket id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function companionTickets(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        ticketId = _ref4.ticketId,
        headers = _ref4.headers;

    return client({
      url: "/tickets/" + ticketId + "/companion-tickets",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, headers: headers })
    });
  }

  /**
   * GET /tickets - list tickets.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {TicketsListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @param {string} [opts.providerId] - Provider id
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        _ref5$query = _ref5.query,
        query = _ref5$query === undefined ? {} : _ref5$query,
        headers = _ref5.headers,
        providerId = _ref5.providerId;

    var query_ = providerId ? _extends({}, query, { providerId: providerId }) : query;
    return client({
      url: "/tickets",
      params: query_,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /tickets/:ticketId/delivery - update ticket delivery.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.ticketId - Ticket id
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function updateDelivery(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        ticketId = _ref6.ticketId,
        data = _ref6.data,
        headers = _ref6.headers;

    return client({
      url: "/tickets/" + ticketId + "/delivery",
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  /**
   * PUT /tickets/:ticketId/passenger - update ticket passenger.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.ticketId - Ticket id
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function updatePassenger(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        ticketId = _ref7.ticketId,
        data = _ref7.data,
        headers = _ref7.headers;

    return client({
      url: "/tickets/" + ticketId + "/passenger",
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  return {
    get: get,
    all: all,
    patch: patch,
    companionTickets: companionTickets,
    updateDelivery: updateDelivery,
    updatePassenger: updatePassenger
  };
}

module.exports = ticketsFactory;