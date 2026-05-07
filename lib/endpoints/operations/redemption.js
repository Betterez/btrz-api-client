"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for redemptions API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} redemptions API methods
 */


function redemptionFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        redemption = _ref2.redemption,
        headers = _ref2.headers;

    return client({
      url: "/redemptions",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
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
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        passId = _ref3.passId,
        timezone = _ref3.timezone,
        headers = _ref3.headers;

    return client({
      url: "/redemptions/validate/" + passId,
      params: { timezone: timezone },
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        data = _ref4.data,
        headers = _ref4.headers;

    return client({
      url: "/unredeem",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  return {
    create: create,
    getValidate: getValidate,
    unredeem: unredeem
  };
}

module.exports = redemptionFactory;