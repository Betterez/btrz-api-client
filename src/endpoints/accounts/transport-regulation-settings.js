const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for transport-regulation-settings (CNRT) API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function transportRegulationSettingsForCNRT({client, internalAuthTokenProvider}) {
  /**
   * GET /transport-regulation-settings/cnrt - get CNRT transport regulation settings.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, headers}) {
    return client({
      url: "/transport-regulation-settings/cnrt",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /transport-regulation-settings/cnrt - update CNRT transport regulation settings.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.transportRegulationSettings - Settings payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, transportRegulationSettings, headers}) {
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
