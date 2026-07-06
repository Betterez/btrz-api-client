const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for inventory event endpoint (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
function eventsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /event/:eventId - get event by id.
   * @param {Object} opts
   * @param {string} opts.eventId - Event id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({eventId, token, headers}) {
    return client.get(`/event/${eventId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {get};
}

module.exports = eventsFactory;
