const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for journey-prices endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryJourneyPricesQuery
 */

/**
 * Factory for journey-prices API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, deleteById: function, get: function, create: function, update: function }}
 */
function journeyPricesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /journey-prices - list journey prices.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InventoryJourneyPricesQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/journey-prices",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /journey-prices/:id - get journey price by id.
   * @param {Object} opts
   * @param {string} opts.id - Journey price id
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InventoryJourneyPricesQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({id, token, jwtToken, query = {}, headers}) {
    return client({
      url: `/journey-prices/${id}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * DELETE /journey-prices/:id - delete journey price.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Journey price id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function deleteById({token, jwtToken, id, headers}) {
    return client({
      url: `/journey-prices/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /journey-prices - create journey price.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.journeyPrice - Journey price payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, journeyPrice, headers}) {
    return client({
      url: "/journey-prices",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {journeyPrice}
    });
  }

  /**
   * PATCH /journey-prices/:journeyPriceId - update journey price.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.journeyPriceId - Journey price id
   * @param {Object} opts.journeyPrice - Journey price payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, journeyPriceId, journeyPrice, headers}) {
    return client({
      url: `/journey-prices/${journeyPriceId}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {update: journeyPrice}
    });
  }

  return {
    all,
    deleteById,
    get,
    create,
    update
  };
}

module.exports = journeyPricesFactory;
