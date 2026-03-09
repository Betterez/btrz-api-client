const {authorizationHeaders} = require("../endpoints_helpers.js");

/**
 * Factory for gift-certificates API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} gift-certificates API methods
 */
function giftCertificatesFactory({client, internalAuthTokenProvider}) {
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
  function list({jwtToken, token, customer, page, headers}) {
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
