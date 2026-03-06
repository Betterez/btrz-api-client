const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} CalendarEntriesQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for calendar-entries API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} calendar-entries API methods
 */
function calendarEntriesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /calendar-entries - list calendar entries.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {CalendarEntriesQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client({
      url: "/calendar-entries",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = calendarEntriesFactory;
