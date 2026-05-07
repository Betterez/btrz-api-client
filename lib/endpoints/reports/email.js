

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for report email API (btrz-api-reports).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ post: function }}
 */


function reportEmailFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /email - send report email.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.report - Report payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function post(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const report = _ref2.report;
    const headers = _ref2.headers;

    return client({
      url: "/email",
      method: "post",
      data: report,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }
  return {
    post
  };
}

module.exports = reportEmailFactory;
