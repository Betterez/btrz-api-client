

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for current application (single) API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */


function applicationsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /application - get current application.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const headers = _ref2.headers;

    return client.get("/application", {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = applicationsFactory;
