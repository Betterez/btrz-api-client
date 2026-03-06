const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /traveller-card-types (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryTravellerCardTypesListQuery
 */

/**
 * Factory for traveller-card-types API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function, get: function, remove: function }}
 */
function travellerCardTypesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /traveller-card-types - list traveller card types.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InventoryTravellerCardTypesListQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/traveller-card-types",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /traveller-card-types - create traveller card type.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.travellerCardType - Traveller card type payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, travellerCardType, headers}) {
    return client({
      url: "/traveller-card-types",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {travellerCardType}
    });
  }

  /**
   * PUT /traveller-card-types/:travellerCardTypeId - update traveller card type.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.travellerCardTypeId - Traveller card type id
   * @param {Object} opts.travellerCardType - Traveller card type payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, travellerCardTypeId, travellerCardType, headers}) {
    return client({
      url: `/traveller-card-types/${travellerCardTypeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {travellerCardType}
    });
  }

  /**
   * GET /traveller-card-types/:travellerCardTypeId - get traveller card type by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.travellerCardTypeId - Traveller card type id
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, travellerCardTypeId, jwtToken, headers}) {
    return client({
      url: `/traveller-card-types/${travellerCardTypeId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  /**
   * DELETE /traveller-card-types/:travellerCardTypeId - remove traveller card type.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.travellerCardTypeId - Traveller card type id
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({token, travellerCardTypeId, jwtToken, headers}) {
    return client({
      url: `/traveller-card-types/${travellerCardTypeId}`,
      method: "delete",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  return {
    all,
    create,
    update,
    get,
    remove
  };
}

module.exports = travellerCardTypesFactory;
