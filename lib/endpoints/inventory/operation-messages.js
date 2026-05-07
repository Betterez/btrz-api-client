"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /operation-messages (btrz-api-inventory). See get-operation-messages getSpec().
 * @typedef {Object} OperationMessagesListQuery
 * @property {string} [providerId] - Provider id to get operation messages for
 * @property {number} [page] - Page number (default 1)
 * @property {string} [name] - Full or partial name (non case sensitive)
 * @property {string} [type] - Operation message type
 * @property {string} [stationId] - Station id of the operation message
 * @property {string} [avoidPagination] - Any value = true to avoid pagination
 * @property {string} [active] - Filter active/inactive [true, false]
 * @property {string} [effectiveDateTimeStartBefore] - ISO datetime (start before/at)
 * @property {string} [effectiveDateTimeEndAfter] - ISO datetime (end after/at)
 */

/**
 * Factory for operation-messages API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, all: function, create: function, update: function, remove: function, getByStation: function }}
 */


function operationMessagesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /operation-messages - list operation messages.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {OperationMessagesListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ operationMessages: Object[], count?: number, next?: string, previous?: string }>>}
   * @throws When the request fails (e.g. 401 Unauthorized, 500 Internal Server Error)
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/operation-messages",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /operation-messages - create operation message. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.opMsgData - Operation message payload (message, name, type, effectiveDateTimeStart/End, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<Object>>} Created OperationMessage
   * @throws When the request fails (400, 401, 409 duplicate key, 500)
   */
  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        opMsgData = _ref3.opMsgData,
        headers = _ref3.headers;

    return client({
      url: "/operation-messages",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: opMsgData
    });
  }

  /**
   * PUT /operation-messages/:operationMessageId - update operation message. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.operationMessageId - Operation message id (24-char hex ObjectId)
   * @param {Object} opts.opMsgData - Operation message payload (message, name, type, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<Object>>} Updated OperationMessage
   * @throws When the request fails (400, 401, 404 NOT_FOUND, 500)
   */
  function update(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        operationMessageId = _ref4.operationMessageId,
        opMsgData = _ref4.opMsgData,
        headers = _ref4.headers;

    return client({
      url: "/operation-messages/" + operationMessageId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: opMsgData
    });
  }

  /**
   * GET /operation-messages/:operationMessageId - get operation message by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.operationMessageId - Operation message id (24-char hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<Object>>} Response body is the OperationMessage
   * @throws When the request fails (e.g. 401 Unauthorized, 404 NOT_FOUND, 500 Internal Server Error)
   */
  function get(_ref5) {
    var token = _ref5.token,
        operationMessageId = _ref5.operationMessageId,
        headers = _ref5.headers;

    return client({
      url: "/operation-messages/" + operationMessageId,
      method: "get",
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * DELETE /operation-messages/:operationMessageId - remove operation message. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.operationMessageId - Operation message id (24-char hex ObjectId)
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<void>>} 204 No Content on success
   * @throws When the request fails (e.g. 401 Unauthorized, 404 NOT_FOUND, 500 Internal Server Error)
   */
  function remove(_ref6) {
    var jwtToken = _ref6.jwtToken,
        operationMessageId = _ref6.operationMessageId,
        token = _ref6.token,
        headers = _ref6.headers;

    return client({
      url: "/operation-messages/" + operationMessageId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /operation-messages-stations - get operation messages by station (complex JSON payload).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.opMsgData - Request body (OperationMessagesStationsQuery: station criteria and dates)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<Object>>} Response body matches OperationMessagesStations schema
   * @throws When the request fails (e.g. 400 INVALID_DATE_RANGE/INVALID_STATION, 401, 500)
   */
  function getByStation(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        opMsgData = _ref7.opMsgData,
        headers = _ref7.headers;

    return client({
      url: "/operation-messages-stations",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: opMsgData
    });
  }

  return {
    get: get,
    all: all,
    create: create,
    update: update,
    remove: remove,
    getByStation: getByStation
  };
}

module.exports = operationMessagesFactory;