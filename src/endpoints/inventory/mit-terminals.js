const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for mit-terminals API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
function mitTerminalFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /mit-terminals - list MIT terminals (paginated). API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ mitTerminals: Object[], next?: string, previous?: string, count: number }>>}
   * @throws 401; 500.
   */
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/mit-terminals", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /mit-terminals/:mitTerminalId - get MIT terminal by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.mitTerminalId - MIT terminal id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ mitTerminal: Object }>>}
   * @throws 400 INVALID_MIT_TERMINAL_ID; 401; 404 MIT_TERMINAL_NOT_FOUND; 500.
   */
  function get({mitTerminalId, token, headers}) {
    return client.get(`/mit-terminals/${mitTerminalId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /mit-terminals - create MIT terminal. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.mitTerminal - MIT terminal payload (name, serialNumber required; user, password per API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ mitTerminal: Object }>>}
   * @throws 400 WRONG_DATA (mitTerminal, name, serialNumber, user, password); 401; 404 MIT_TERMINAL_NOT_FOUND; 500.
   */
  function create({jwtToken, token, mitTerminal, headers}) {
    return client({
      url: "/mit-terminals",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        mitTerminal
      }
    });
  }

  /**
   * DELETE /mit-terminals/:mitTerminalId - remove MIT terminal. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.mitTerminalId - MIT terminal id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ mitTerminalId: string }>>}
   * @throws 400 INVALID_MIT_TERMINAL_ID; 401; 404 MIT_TERMINAL_NOT_FOUND; 500.
   */
  function remove({jwtToken, mitTerminalId, token, headers}) {
    return client({
      url: `/mit-terminals/${mitTerminalId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /mit-terminals/:mitTerminalId - update MIT terminal. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.mitTerminalId - MIT terminal id (24 hex characters)
   * @param {Object} opts.mitTerminal - MIT terminal payload (MitTerminalPost)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ mitTerminal: Object }>>}
   * @throws 400 WRONG_DATA; 401; 404 MIT_TERMINAL_NOT_FOUND; 500.
   */
  function update({jwtToken, token, mitTerminalId, mitTerminal, headers}) {
    return client({
      url: `/mit-terminals/${mitTerminalId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        mitTerminal
      }
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = mitTerminalFactory;
