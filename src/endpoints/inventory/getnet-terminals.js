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
   * GET /getnet-terminals - list getnet terminals.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {GetnetTerminalsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * GET /getnet-terminals/:getnetTerminalId - get a getnet terminal. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.getnetTerminalId - Getnet terminal id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * @param {Object} opts.getnetTerminal - Getnet terminal payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * DELETE /getnet-terminals/:getnetTerminalId - remove getnet terminal. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.getnetTerminalId - Getnet terminal id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * PUT /getnet-terminals/:getnetTerminalId - update getnet terminal. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.getnetTerminalId - Getnet terminal id
   * @param {Object} opts.getnetTerminal - Getnet terminal payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
