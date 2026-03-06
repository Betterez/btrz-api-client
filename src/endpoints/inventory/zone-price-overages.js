const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for zone-price-overages API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
function zonePriceOverageFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /zone-price-overages - list zone price overages. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/zone-price-overages", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /zone-price-overages/:zonePriceOverageId - get zone price overage by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} opts.zonePriceOverageId - Zone price overage id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({zonePriceOverageId, token, headers}) {
    return client.get(`/zone-price-overages/${zonePriceOverageId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /zone-price-overages - create zone price overage(s). API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {Object} opts.zonePriceOverages - Zone price overages payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({jwtToken, token, zonePriceOverages, headers}) {
    return client({
      url: "/zone-price-overages",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        zonePriceOverages
      }
    });
  }

  /**
   * DELETE /zone-price-overages/:zonePriceOverageId - remove zone price overage.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.zonePriceOverageId - Zone price overage id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({jwtToken, zonePriceOverageId, token, headers}) {
    return client({
      url: `/zone-price-overages/${zonePriceOverageId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /zone-price-overages/:zonePriceOverageId - update zone price overage. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.zonePriceOverageId - Zone price overage id
   * @param {Object} opts.zonePriceOverages - Zone price overages payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, zonePriceOverageId, zonePriceOverages, headers}) {
    return client({
      url: `/zone-price-overages/${zonePriceOverageId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        zonePriceOverages
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

module.exports = zonePriceOverageFactory;
