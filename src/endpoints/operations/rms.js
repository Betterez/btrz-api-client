const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} RmsQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for RMS API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} rms API methods (manifestForecasts)
 */
function rmsFactory({
  client, internalAuthTokenProvider
}) {
  const manifestForecasts = {
    /**
     * GET /rms/manifest-forecast - list manifest forecasts.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {RmsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all({
      token,
      jwtToken,
      query = {},
      headers
    }) {
      return client.get("/rms/manifest-forecast", {
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * GET /rms/manifest-forecast/:scheduleId - get manifest forecast by schedule id.
     * @param {Object} opts
     * @param {string} opts.scheduleId - Schedule id
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {RmsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({
      scheduleId,
      token,
      jwtToken,
      query = {},
      headers
    }) {
      return client.get(`/rms/manifest-forecast/${scheduleId}`, {
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    manifestForecasts
  };
}

module.exports = rmsFactory;
