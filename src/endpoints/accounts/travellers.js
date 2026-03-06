const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /travellers (btrz-api-accounts). See get-handler getSpec().
 * @typedef {Object} TravellersListQuery
 * @property {string} [customerId] - Filter by customer (ObjectId)
 * @property {number} [page] - Page number (1-based); if omitted results are not paginated
 * @property {string} [providerIds] - Provider ids for traveller card types
 */

/**
 * Query for PUT/DELETE/POST travellers (btrz-api-accounts). See put/delete/post handlers getSpec().
 * @typedef {Object} TravellerProviderIdsQuery
 * @property {string} [providerIds] - Provider ids to seek for customer, cards and fares
 */

/**
 * Factory for travellers API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, update: function, remove: function, create: function }}
 */
function travellersFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /travellers - list travellers.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {TravellersListQuery} [opts.query] - Query params (customerId, page, providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query, headers}) {
    return client({
      url: "/travellers",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /travellers/:id - get a traveller. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Traveller id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, id, query = {}, headers}) {
    return client({
      url: `/travellers/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * PUT /travellers/:id - update a traveller.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Traveller id (ObjectId)
   * @param {Object} opts.data - Traveller payload
   * @param {TravellerProviderIdsQuery} [opts.query] - Query params (providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, id, data, query = {}, headers}) {
    return client({
      url: `/travellers/${id}`,
      method: "put",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * DELETE /travellers/:id - remove a traveller.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Traveller id (ObjectId)
   * @param {TravellerProviderIdsQuery} [opts.query] - Query params (providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({token, jwtToken, id, query = {}, headers}) {
    return client({
      url: `/travellers/${id}`,
      method: "delete",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /travellers - create a traveller.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Traveller payload
   * @param {TravellerProviderIdsQuery} [opts.query] - Query params (providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, query = {}, data, headers}) {
    return client({
      url: "/travellers",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  return {
    all,
    get,
    update,
    remove,
    create
  };
}

module.exports = travellersFactory;
