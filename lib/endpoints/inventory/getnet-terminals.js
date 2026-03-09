"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /getnet-terminals (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} GetnetTerminalsQuery
 * @property {number} [page] - The page number to retrieve
 * @property {string} [stationId] - Filter terminals by station (location) ID
 * @property {string} [serialNumber] - Filter terminals by serial number
 */

/**
 * Factory for getnet-terminals API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, remove: function, update: function }}
 */


function getnetTerminalFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /getnet-terminals - list getnet terminals (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {GetnetTerminalsQuery} [opts.query] - Query params (page, stationId, serialNumber)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ getnetTerminals: Array, next?: string, previous?: string, count: number }>>}
   * @throws When response is 4xx/5xx (400 INVALID_PAGE, 401, 500)
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/getnet-terminals", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /getnet-terminals/:getnetTerminalId - get a getnet terminal by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.getnetTerminalId - Getnet terminal id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ getnetTerminal: Object }>>}
   * @throws When response is 4xx/5xx (400 INVALID_GETNET_TERMINAL_ID, 401, 404 GETNET_TERMINAL_NOT_FOUND, 500)
   */
  function get(_ref3) {
    var getnetTerminalId = _ref3.getnetTerminalId,
        token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        headers = _ref3.headers;

    return client.get("/getnet-terminals/" + getnetTerminalId, {
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /getnet-terminals - create getnet terminal.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.getnetTerminal - Getnet terminal payload (name, serialNumber, stationId optional)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ getnetTerminal: Object }>>}
   * @throws When response is 4xx/5xx (400 WRONG_DATA/INVALID_STATION_ID/STATION_NOT_FOUND, 401, 409 duplicate serial, 500)
   */
  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        getnetTerminal = _ref4.getnetTerminal,
        headers = _ref4.headers;

    return client({
      url: "/getnet-terminals",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        getnetTerminal: getnetTerminal
      }
    });
  }

  /**
   * DELETE /getnet-terminals/:getnetTerminalId - remove getnet terminal.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.getnetTerminalId - Getnet terminal id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ getnetTerminalId: string }>>}
   * @throws When response is 4xx/5xx (400 INVALID_GETNET_TERMINAL_ID, 401, 404 GETNET_TERMINAL_NOT_FOUND, 500)
   */
  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        getnetTerminalId = _ref5.getnetTerminalId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/getnet-terminals/" + getnetTerminalId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /getnet-terminals/:getnetTerminalId - update getnet terminal.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.getnetTerminalId - Getnet terminal id (24 hex characters)
   * @param {Object} opts.getnetTerminal - Getnet terminal payload (name, serialNumber, stationId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ getnetTerminal: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 404 GETNET_TERMINAL_NOT_FOUND, 409 duplicate serial, 500)
   */
  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        getnetTerminalId = _ref6.getnetTerminalId,
        getnetTerminal = _ref6.getnetTerminal,
        headers = _ref6.headers;

    var _getnetTerminalId = getnetTerminalId || getnetTerminal._id;

    return client({
      url: "/getnet-terminals/" + _getnetTerminalId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        getnetTerminal: {
          name: getnetTerminal.name,
          serialNumber: getnetTerminal.serialNumber,
          stationId: getnetTerminal.stationId
        }
      }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    remove: remove,
    update: update
  };
}

module.exports = getnetTerminalFactory;