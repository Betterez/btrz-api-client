const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for single transaction API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} transaction API methods
 */
function transactionFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /transaction/:id - get transaction by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Transaction id
   * @param {string} opts.providerId - Provider id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, id, providerId, headers}) {
    return client({
      url: `/transaction/${id}?providerId=${providerId}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = transactionFactory;
