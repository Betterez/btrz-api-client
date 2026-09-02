const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for GET /clover-terminals (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} CloverTerminalsQuery
 * @property {number} [page] - The page number to retrieve
 * @property {string} [stationId] - Filter terminals by station (location) ID
 * @property {string} [serialNumber] - Filter terminals by serial number
 */

/**
 * Factory for clover-terminals API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, remove: function, update: function }}
 */
function cloverTerminalFactory({
  client,
  internalAuthTokenProvider
}) {
  /**
   * GET /clover-terminals - list Clover terminals (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {CloverTerminalsQuery} [opts.query] - Query params (page, stationId, serialNumber)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ cloverTerminals: Array, next?: string, previous?: string, count: number }>>}
   * @throws When response is 4xx/5xx (400 INVALID_PAGE, 401, 500)
   */
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/clover-terminals", {
      params: query,
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  /**
   * GET /clover-terminals/:cloverTerminalId - get a Clover terminal by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.cloverTerminalId - Clover terminal id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ cloverTerminal: Object }>>}
   * @throws When response is 4xx/5xx (400 INVALID_CLOVER_TERMINAL_ID, 401, 404 CLOVER_TERMINAL_NOT_FOUND, 500)
   */
  function get({
    cloverTerminalId,
    token,
    jwtToken,
    headers
  }) {
    return client.get(`/clover-terminals/${cloverTerminalId}`, {
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  /**
   * POST /clover-terminals - create Clover terminal.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.cloverTerminal - Clover terminal payload (name, serialNumber, stationId optional)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ cloverTerminal: Object }>>}
   * @throws When response is 4xx/5xx (400 WRONG_DATA/INVALID_STATION_ID/STATION_NOT_FOUND, 401, 409 duplicate name/serial, 500)
   */
  function create({
    jwtToken,
    token,
    cloverTerminal,
    headers
  }) {
    return client({
      url: "/clover-terminals",
      method: "post",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        cloverTerminal
      }
    });
  }

  /**
   * DELETE /clover-terminals/:cloverTerminalId - remove Clover terminal.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.cloverTerminalId - Clover terminal id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ cloverTerminalId: string }>>}
   * @throws When response is 4xx/5xx (400 INVALID_CLOVER_TERMINAL_ID, 401, 404 CLOVER_TERMINAL_NOT_FOUND, 500)
   */
  function remove({
    jwtToken,
    cloverTerminalId,
    token,
    headers
  }) {
    return client({
      url: `/clover-terminals/${cloverTerminalId}`,
      method: "delete",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  /**
   * PUT /clover-terminals/:cloverTerminalId - update Clover terminal.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.cloverTerminalId - Clover terminal id (24 hex characters)
   * @param {Object} opts.cloverTerminal - Clover terminal payload (name, serialNumber, stationId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ cloverTerminal: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 404 CLOVER_TERMINAL_NOT_FOUND, 409 duplicate name/serial, 500)
   */
  function update({
    jwtToken,
    token,
    cloverTerminalId,
    cloverTerminal,
    headers
  }) {
    const _cloverTerminalId = cloverTerminalId || cloverTerminal._id;
    return client({
      url: `/clover-terminals/${_cloverTerminalId}`,
      method: "put",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        cloverTerminal: {
          name: cloverTerminal.name,
          serialNumber: cloverTerminal.serialNumber,
          stationId: cloverTerminal.stationId
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
module.exports = cloverTerminalFactory;