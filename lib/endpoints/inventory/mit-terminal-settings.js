"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for mit-terminals-settings API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function mitTerminalFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /mit-terminals-settings - list MIT terminal settings. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ mitTerminalsSettings: Object[], next?: string, previous?: string, count: number }>>}
   * @throws When the request fails (e.g. 401 Unauthorized, 500 Internal Server Error)
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/mit-terminals-settings", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /mit-terminals-settings/:id - get MIT terminal setting by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - MIT terminal setting id (24-char hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ mitTerminalSettings: Object }>>}
   * @throws When the request fails (e.g. 400 INVALID_ID, 401 Unauthorized, 404 MITTERMINALSETTING_NOT_FOUND, 500 Internal Server Error)
   */
  function get(_ref3) {
    var id = _ref3.id,
        token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        headers = _ref3.headers;

    return client.get("/mit-terminals-settings/" + id, {
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /mit-terminals-settings - create MIT terminal settings. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.mitTerminalSettings - MIT terminal settings payload (name, operatingCompanyId, shiftLocationId, user, password)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ mitTerminalSettings: Object }>>}
   * @throws When the request fails (e.g. 400 WRONG_DATA, 401 Unauthorized, 500 Internal Server Error)
   */
  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        mitTerminalSettings = _ref4.mitTerminalSettings,
        headers = _ref4.headers;

    return client({
      url: "/mit-terminals-settings",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        mitTerminalSettings: mitTerminalSettings
      }
    });
  }

  /**
   * DELETE /mit-terminals-settings/:id - remove MIT terminal settings. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - MIT terminal setting id (24-char hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ mitterminalsettingId: string }>>}
   * @throws When the request fails (e.g. 400 INVALID_ID, 401 Unauthorized, 404 MITTERMINALSETTING_NOT_FOUND, 500 Internal Server Error)
   */
  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        id = _ref5.id,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/mit-terminals-settings/" + id,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /mit-terminals-settings/:id - update MIT terminal settings. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - MIT terminal setting id (24-char hex ObjectId)
   * @param {Object} opts.mitTerminalSettings - MIT terminal settings payload (name, operatingCompanyId, shiftLocationId, user, password)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ mitTerminalSettings: Object }>>}
   * @throws When the request fails (e.g. 400 WRONG_DATA/INVALID_ID, 401, 404 MITTERMINALSETTING_NOT_FOUND, 500)
   */
  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        id = _ref6.id,
        mitTerminalSettings = _ref6.mitTerminalSettings,
        headers = _ref6.headers;

    return client({
      url: "/mit-terminals-settings/" + id,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        mitTerminalSettings: mitTerminalSettings
      }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    remove: remove
  };
}

module.exports = mitTerminalFactory;