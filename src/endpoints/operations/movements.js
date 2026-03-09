const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Request body for POST /movements (btrz-api-operations). See MovementPostData in movements models.
 * @typedef {Object} MovementPostData
 * @property {Array<{ _id: string, section?: string, sectionName?: string, seat?: string, row?: string, seatId?: string }>} tickets - Tickets to move (same transaction if more than one). Each must have _id; optional seat fields for destination seatmap.
 * @property {{ routeId: string, scheduleId: string, date: string }} newManifest - Destination manifest: routeId (ObjectId), scheduleId (UUID), date (YYYY-MM-DD).
 * @property {string} channel - Channel of the movement (e.g. backoffice). Must be a valid backoffice channel.
 * @property {boolean} [allowsDifferentTrx] - If true, allows moving tickets from different transactions.
 * @property {boolean} [newdesign] - If true, uses new seatmap design for accommodation.
 */

/**
 * Factory for movements API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} movements API methods
 */
function movementsFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /movements - create a movement (move tickets to another manifest). No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization Bearer)
   * @param {MovementPostData} opts.movement - Request body: tickets, newManifest, channel; optional allowsDifferentTrx, newdesign
   * @param {Object} [opts.query] - Optional query params (API accepts none)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{}>>}
   */
  function create({token, jwtToken, movement, query = {}, headers}) {
    return client({
      url: "/movements",
      method: "post",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: movement
    });
  }

  return {
    create
  };
}

module.exports = movementsFactory;
