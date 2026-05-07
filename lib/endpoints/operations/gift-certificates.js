

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for gift-certificates API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} gift-certificates API methods
 */


function giftCertificatesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /gift-certificates - list paid gift certificates for a customer. Paginated; requires customer JWT when used with JwtAuth.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization Bearer); when using customer JWT, must match customer param
   * @param {string} opts.customer - Customer number to filter by (required)
   * @param {number} [opts.page] - 1-based page number; page size is 20
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{ giftCertificates: Array<object>, count: number, next?: string, previous?: string }>>}
   */
  function list(_ref2) {
    const jwtToken = _ref2.jwtToken;
    const token = _ref2.token;
    const customer = _ref2.customer;
    const page = _ref2.page;
    const headers = _ref2.headers;

    const params = {customer};
    if (page != null) {
      params.page = page;
    }
    return client({
      url: "/gift-certificates",
      method: "get",
      params,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    list
  };
}

module.exports = giftCertificatesFactory;
