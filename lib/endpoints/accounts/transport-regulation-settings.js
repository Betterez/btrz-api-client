

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for transport-regulation-settings (CNRT) API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */


function transportRegulationSettingsForCNRT(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /transport-regulation-settings/cnrt - get CNRT transport regulation settings. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const headers = _ref2.headers;

    return client({
      url: "/transport-regulation-settings/cnrt",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /transport-regulation-settings/cnrt - update CNRT transport regulation settings. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.transportRegulationSettings - Settings payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const transportRegulationSettings = _ref3.transportRegulationSettings;
    const headers = _ref3.headers;

    return client({
      url: "/transport-regulation-settings/cnrt",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: transportRegulationSettings
    });
  }

  return {
    get,
    update
  };
}

module.exports = transportRegulationSettingsForCNRT;
