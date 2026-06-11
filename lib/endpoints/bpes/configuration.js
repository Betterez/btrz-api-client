"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for BPE configuration API (btrz-api-bpes).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, create: function, update: function }}
 */


function configurationFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /bpe-configurations - returns the BPE configuration for the authenticated account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ bpeConfiguration: Object }>>}
   */
  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/bpe-configurations",
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /bpe-configurations - creates the BPE configuration for the authenticated account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.bpeConfiguration - Configuration payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ bpeConfiguration: Object }>>}
   */
  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        bpeConfiguration = _ref3.bpeConfiguration,
        headers = _ref3.headers;

    return client({
      url: "/bpe-configurations",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { bpeConfiguration: bpeConfiguration }
    });
  }

  /**
   * PUT /bpe-configurations - updates the BPE configuration for the authenticated account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.bpeConfiguration - Configuration payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ bpeConfiguration: Object }>>}
   */
  function update(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        bpeConfiguration = _ref4.bpeConfiguration,
        headers = _ref4.headers;

    return client({
      url: "/bpe-configurations",
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { bpeConfiguration: bpeConfiguration }
    });
  }

  return {
    get: get,
    create: create,
    update: update
  };
}

module.exports = configurationFactory;