const {authorizationHeaders} = require("../endpoints_helpers.js");

/**
 * Factory for BPE configuration API (btrz-api-bpes).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, create: function, update: function }}
 */
function configurationFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /bpe-configurations - returns the BPE configuration for the authenticated account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ bpeConfiguration: Object }>>}
   */
  function get({token, jwtToken, headers}) {
    return client({
      url: "/bpe-configurations",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
  function create({token, jwtToken, bpeConfiguration, headers}) {
    return client({
      url: "/bpe-configurations",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {bpeConfiguration}
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
  function update({token, jwtToken, bpeConfiguration, headers}) {
    return client({
      url: "/bpe-configurations",
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {bpeConfiguration}
    });
  }

  return {
    get,
    create,
    update
  };
}

module.exports = configurationFactory;
