const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for sub-print-templates API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */
function subPrintTemplatesFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /sub-print-templates - create a sub print template. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.subPrintTemplate - Sub print template payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({jwtToken, token, subPrintTemplate, headers}) {
    return client({
      url: "/sub-print-templates",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        subPrintTemplate
      }
    });
  }
  return {
    create
  };
}

module.exports = subPrintTemplatesFactory;
