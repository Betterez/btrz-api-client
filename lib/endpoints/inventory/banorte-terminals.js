const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for GET /banorte-terminals (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} BanorteTerminalsQuery
 * @property {number} [page] - The page number to retrieve
 * @property {string} [stationId] - Filter terminals by station (location) ID
 * @property {string} [serialNumber] - Filter terminals by serial number
 */

/**
 * Factory for banorte-terminals API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, remove: function, update: function }}
 */
function banorteTerminalFactory({
  client,
  internalAuthTokenProvider
}) {
  /**
   * GET /banorte-terminals - list Banorte terminals (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {BanorteTerminalsQuery} [opts.query] - Query params (page, stationId, serialNumber)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ banorteTerminals: Array, next?: string, previous?: string, count: number }>>}
   * @throws When response is 4xx/5xx (400 INVALID_PAGE, 401, 500)
   */
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/banorte-terminals", {
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
   * GET /banorte-terminals/:banorteTerminalId - get a Banorte terminal by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.banorteTerminalId - Banorte terminal id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ banorteTerminal: Object }>>}
   * @throws When response is 4xx/5xx (400 INVALID_BANORTE_TERMINAL_ID, 401, 404 BANORTE_TERMINAL_NOT_FOUND, 500)
   */
  function get({
    banorteTerminalId,
    token,
    jwtToken,
    headers
  }) {
    return client.get(`/banorte-terminals/${banorteTerminalId}`, {
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  /**
   * POST /banorte-terminals - create Banorte terminal.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.banorteTerminal - Banorte terminal payload (name, serialNumber, stationId optional)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ banorteTerminal: Object }>>}
   * @throws When response is 4xx/5xx (400 WRONG_DATA/INVALID_STATION_ID/STATION_NOT_FOUND, 401, 409 duplicate serial, 500)
   */
  function create({
    jwtToken,
    token,
    banorteTerminal,
    headers
  }) {
    return client({
      url: "/banorte-terminals",
      method: "post",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        banorteTerminal
      }
    });
  }

  /**
   * DELETE /banorte-terminals/:banorteTerminalId - remove Banorte terminal.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.banorteTerminalId - Banorte terminal id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ banorteTerminalId: string }>>}
   * @throws When response is 4xx/5xx (400 INVALID_BANORTE_TERMINAL_ID, 401, 404 BANORTE_TERMINAL_NOT_FOUND, 500)
   */
  function remove({
    jwtToken,
    banorteTerminalId,
    token,
    headers
  }) {
    return client({
      url: `/banorte-terminals/${banorteTerminalId}`,
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
   * PUT /banorte-terminals/:banorteTerminalId - update Banorte terminal.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.banorteTerminalId - Banorte terminal id (24 hex characters)
   * @param {Object} opts.banorteTerminal - Banorte terminal payload (name, serialNumber, stationId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ banorteTerminal: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 404 BANORTE_TERMINAL_NOT_FOUND, 409 duplicate serial, 500)
   */
  function update({
    jwtToken,
    token,
    banorteTerminalId,
    banorteTerminal,
    headers
  }) {
    const _banorteTerminalId = banorteTerminalId || banorteTerminal._id;
    return client({
      url: `/banorte-terminals/${_banorteTerminalId}`,
      method: "put",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        banorteTerminal: {
          name: banorteTerminal.name,
          serialNumber: banorteTerminal.serialNumber,
          stationId: banorteTerminal.stationId
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
module.exports = banorteTerminalFactory;