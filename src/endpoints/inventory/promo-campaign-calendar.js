const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * The excluded travel dates of a promo campaign. No promo of the campaign applies to tickets that travel on those dates.
 * @typedef {Object} PromoCampaignCalendar
 * @property {string} campaign - The campaign name, as written on the promos (compared trimmed and case insensitive)
 * @property {string[]} excludedTravelDates - Local travel dates (YYYY-MM-DD), sorted
 */

/**
 * Factory for the promo campaign calendar API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function promoCampaignCalendarFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /promo-campaign-calendar - the excluded travel dates of a promo campaign (an empty list when it has none).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.campaign - The campaign name
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ promoCampaignCalendar: PromoCampaignCalendar }>>}
   * @throws When response is 4xx/5xx (400 WRONG_DATA, 401, 500)
   */
  function get({token, jwtToken, campaign, headers}) {
    return client.get("/promo-campaign-calendar", {
      params: {campaign},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /promo-campaign-calendar - creates or replaces the excluded travel dates of a promo campaign.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PromoCampaignCalendar} opts.promoCampaignCalendar - The campaign and its excluded travel dates
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ promoCampaignCalendar: PromoCampaignCalendar }>>}
   * @throws When response is 4xx/5xx (400 WRONG_DATA, 400 INVALID_EXCLUDED_TRAVEL_DATES, 401, 500)
   */
  function update({token, jwtToken, promoCampaignCalendar, headers}) {
    return client({
      url: "/promo-campaign-calendar",
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {promoCampaignCalendar}
    });
  }

  return {
    get,
    update
  };
}

module.exports = promoCampaignCalendarFactory;
