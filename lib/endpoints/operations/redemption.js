

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for redemptions API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} redemptions API methods
 */


function redemptionFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /redemptions - create redemption. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.redemption - Redemption payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const redemption = _ref2.redemption;
    const headers = _ref2.headers;

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
  function getValidate(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const passId = _ref3.passId;
    const timezone = _ref3.timezone;
    const headers = _ref3.headers;

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
  function unredeem(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const data = _ref4.data;
    const headers = _ref4.headers;

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
