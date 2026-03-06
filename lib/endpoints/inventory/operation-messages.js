"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for operation-messages endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryOperationMessagesQuery
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
   * @param {InventoryOperationMessagesQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * POST /operation-messages - create operation message.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.opMsgData - Operation message payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * PUT /operation-messages/:operationMessageId - update operation message.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.operationMessageId - Operation message id
   * @param {Object} opts.opMsgData - Operation message payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * GET /operation-messages/:operationMessageId - get operation message by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.operationMessageId - Operation message id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * DELETE /operation-messages/:operationMessageId - remove operation message.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.operationMessageId - Operation message id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * @param {Object} opts.opMsgData - Request body (station criteria)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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