const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for redemptions API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} redemptions API methods
 */
function redemptionFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /redemptions - create redemption. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.redemption - Redemption payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, redemption, headers}) {
    return client({
      url: "/redemptions",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: redemption
    });
  }

  /**
   * GET /redemptions/validate/:passId - validate redemption. Query: timezone (required per getSpec).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.passId - Pass id
   * @param {string} opts.timezone - Timezone (required query param per btrz-api-operations getSpec)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getValidate({token, jwtToken, passId, timezone, headers}) {
    return client({
      url: `/redemptions/validate/${passId}`,
      params: {timezone},
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /unredeem - unredeem. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function unredeem({token, jwtToken, data, headers}) {
    return client({
      url: "/unredeem",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    create,
    getValidate,
    unredeem
  };
}

module.exports = redemptionFactory;
