const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for fares endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryFaresQuery
 */

/**
 * Factory for fares API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, update: function, create: function, adjustments: { create: function, remove: function } }}
 */
function faresFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /fares - list fares.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {InventoryFaresQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client.get("/fares", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /fare/:id - get fare by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.id - Fare id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, id, headers}) {
    return client.get(`/fare/${id}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /fares - create fare.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.fare - Fare payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, fare, headers}) {
    return client({
      url: "/fares",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {fare}
    });
  }

  /**
   * PUT /fare/:fareId - update fare.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.fareId - Fare id
   * @param {Object} opts.fare - Fare payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, fareId, fare, headers}) {
    return client({
      url: `/fare/${fareId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {fare}
    });
  }

  const adjustments = {
    /**
     * POST /fares/:fareId/adjustments-overrides - create adjustments override.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.fareId - Fare id
     * @param {Object} opts.adjustmentsOverride - Adjustments override payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({token, jwtToken, fareId, adjustmentsOverride, headers}) {
      return client({
        url: `/fares/${fareId}/adjustments-overrides`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {adjustmentsOverride}
      });
    },

    /**
     * DELETE /fares/:fareId/adjustments-override/:adjustmentId - remove adjustments override.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.fareId - Fare id
     * @param {string} opts.adjustmentId - Adjustment id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    remove({token, jwtToken, fareId, adjustmentId, headers}) {
      return client({
        url: `/fares/${fareId}/adjustments-override/${adjustmentId}`,
        method: "delete",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        })
      });
    }

  };

  return {
    all,
    get,
    update,
    create,
    adjustments
  };
}

module.exports = faresFactory;
