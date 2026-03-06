const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /calendar-entries (btrz-api-operations). See get-calendar-entries getSpec().
 * @typedef {Object} CalendarEntriesListQuery
 * @property {string} from - Start travel date (required, format yyyy-mm-dd)
 * @property {string} to - End travel date (required, format yyyy-mm-dd, max 31 days range)
 * @property {string} [providerId] - Provider id when consuming from a non-main account
 * @property {string} [channels] - Filter by channel (e.g. websales); must be one of allowed channels
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
   * @param {CalendarEntriesListQuery} [opts.query] - Query params (from, to required)
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
