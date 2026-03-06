const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /zone-prices (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} ZonePricesListQuery
 * @property {number} [page] - Page number (20 records per page)
 * @property {number} [weight] - Weight in grams
 * @property {string} [serviceTypeIds] - Service type id(s), comma-separated
 * @property {string} [departureZones] - Departure zone(s), comma-separated
 * @property {string} [arrivalZones] - Arrival zone(s), comma-separated
 */

/**
 * Factory for zone-prices API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
function zonePriceFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /zone-prices - list zone prices.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {ZonePricesListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/zone-prices", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /zone-prices/:zonePriceId - get zone price by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} opts.zonePriceId - Zone price id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({zonePriceId, token, headers}) {
    return client.get(`/zone-prices/${zonePriceId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /zone-prices - create zone price. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {Object} opts.zonePrice - Zone price payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({jwtToken, token, zonePrice, headers}) {
    return client({
      url: "/zone-prices",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        zonePrice
      }
    });
  }

  /**
   * DELETE /zone-prices/:zonePriceId - remove zone price. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.zonePriceId - Zone price id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({jwtToken, zonePriceId, token, headers}) {
    return client({
      url: `/zone-prices/${zonePriceId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /zone-prices/:zonePriceId - update zone price. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.zonePriceId - Zone price id
   * @param {Object} opts.zonePrice - Zone price payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, zonePriceId, zonePrice, headers}) {
    return client({
      url: `/zone-prices/${zonePriceId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        zonePrice
      }
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = zonePriceFactory;
