const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

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
function getnetTerminalFactory({client, internalAuthTokenProvider}) {
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
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/getnet-terminals", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
  function get({
    getnetTerminalId,
    token,
    jwtToken,
    headers
  }) {
    return client.get(`/getnet-terminals/${getnetTerminalId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
  function create({
    jwtToken,
    token,
    getnetTerminal,
    headers
  }) {
    return client({
      url: "/getnet-terminals",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        getnetTerminal
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
  function remove({
    jwtToken,
    getnetTerminalId,
    token,
    headers
  }) {
    return client({
      url: `/getnet-terminals/${getnetTerminalId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
  function update({
    jwtToken,
    token,
    getnetTerminalId,
    getnetTerminal,
    headers
  }) {
    const _getnetTerminalId = getnetTerminalId || getnetTerminal._id;

    return client({
      url: `/getnet-terminals/${_getnetTerminalId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
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
    all,
    get,
    create,
    remove,
    update
  };
}

module.exports = getnetTerminalFactory;
