

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for mit-terminals API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function mitTerminalFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /mit-terminals - list MIT terminals (paginated). API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ mitTerminals: Object[], next?: string, previous?: string, count: number }>>}
   * @throws 401; 500.
   */
  function all(_ref2) {
    const token = _ref2.token;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

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
  function get(_ref3) {
    const mitTerminalId = _ref3.mitTerminalId;
    const token = _ref3.token;
    const headers = _ref3.headers;

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
  function create(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const mitTerminal = _ref4.mitTerminal;
    const headers = _ref4.headers;

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
  function remove(_ref5) {
    const jwtToken = _ref5.jwtToken;
    const mitTerminalId = _ref5.mitTerminalId;
    const token = _ref5.token;
    const headers = _ref5.headers;

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
  function update(_ref6) {
    const jwtToken = _ref6.jwtToken;
    const token = _ref6.token;
    const mitTerminalId = _ref6.mitTerminalId;
    const mitTerminal = _ref6.mitTerminal;
    const headers = _ref6.headers;

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
