

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /fares (btrz-api-inventory). See get-fares getSpec().
 * @typedef {Object} InventoryFaresQuery
 * @property {string} [providerIds] - Comma-separated provider IDs to get fares for
 * @property {string} [productIds] - Comma-separated product IDs to get fares for
 * @property {string} [productTypes] - Product type names to get fares for
 * @property {string} [channels] - Filter by channels (must be allowed channel values)
 * @property {string} [isBaseFare] - Filter by base fare [true, false]
 * @property {string} [enabled] - Filter by enabled [true, false]
 */

/**
 * Factory for fares API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, update: function, create: function, adjustments: { create: function, remove: function } }}
 */


function faresFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /fares - list fares.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {InventoryFaresQuery} [opts.query] - Query params (providerIds, productIds, productTypes, channels, isBaseFare, enabled)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/fares", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /fare/:id - get fare by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.id - Fare id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    const token = _ref3.token;
    const id = _ref3.id;
    const headers = _ref3.headers;

    return client.get(`/fare/${id}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /fares - create fare. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.fare - Fare payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const fare = _ref4.fare;
    const headers = _ref4.headers;

    return client({
      url: "/fares",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {fare}
    });
  }

  /**
   * PUT /fare/:fareId - update fare. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.fareId - Fare id
   * @param {Object} opts.fare - Fare payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const fareId = _ref5.fareId;
    const fare = _ref5.fare;
    const headers = _ref5.headers;

    return client({
      url: `/fare/${fareId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {fare}
    });
  }

  const adjustments = {
    /**
     * POST /fares/:fareId/adjustments-overrides - create adjustments override. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.fareId - Fare id
     * @param {Object} opts.adjustmentsOverride - Adjustments override payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref6) {
      const token = _ref6.token;
      const jwtToken = _ref6.jwtToken;
      const fareId = _ref6.fareId;
      const adjustmentsOverride = _ref6.adjustmentsOverride;
      const headers = _ref6.headers;

      return client({
        url: `/fares/${fareId}/adjustments-overrides`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {adjustmentsOverride}
      });
    },


    /**
     * DELETE /fares/:fareId/adjustments-override/:adjustmentId - remove adjustments override. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.fareId - Fare id
     * @param {string} opts.adjustmentId - Adjustment id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    remove: function remove(_ref7) {
      const token = _ref7.token;
      const jwtToken = _ref7.jwtToken;
      const fareId = _ref7.fareId;
      const adjustmentId = _ref7.adjustmentId;
      const headers = _ref7.headers;

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
