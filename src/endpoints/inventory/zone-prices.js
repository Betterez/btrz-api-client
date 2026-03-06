const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for zone-prices endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryZonePricesQuery
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
   * @param {InventoryZonePricesQuery} [opts.query] - Optional query params (forwarded to API)
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
   * GET /zone-prices/:zonePriceId - get zone price by id.
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
   * POST /zone-prices - create zone price.
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
   * DELETE /zone-prices/:zonePriceId - remove zone price.
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
   * PUT /zone-prices/:zonePriceId - update zone price.
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
