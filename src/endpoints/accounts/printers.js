const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for printers API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
function printersFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /printers - list printers.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query, headers}) {
    return client({
      url: "/printers",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = printersFactory;
