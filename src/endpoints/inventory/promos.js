/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /promos (btrz-api-inventory). See get-promos getSpec().
 * @typedef {Object} PromosListQuery
 * @property {string} [providerIds] - Provider IDs to get promos for
 * @property {string} [productId] - Product id
 * @property {string} [productIds] - Comma-separated product IDs (mutually exclusive with productId)
 * @property {string} [promoCode] - Promo internal id
 * @property {string} [name] - Promo name
 * @property {string} [campaign] - Campaign the promo belongs to
 * @property {string} [origin] - Departure station name
 * @property {string} [destination] - Destination station name
 * @property {string} [fareIds] - Comma-separated fare IDs
 * @property {string} [tripType] - 'oneway' or 'roundtrip'
 * @property {string} [channels] - Filter by channels (mandatory if promoCode not given)
 * @property {boolean} [autoApply] - Filter only auto-applied promos
 * @property {string} [includeExpired] - Include expired promos (deprecated)
 * @property {string} [searchOutboundTravelDate] - Outbound travel date for validity
 * @property {string} [searchReturnTravelDate] - Return travel date for validity
 * @property {string} [qty] - Number of tickets
 * @property {number} [page] - Page for pagination
 * @property {string} [orderBy] - Field to order by
 * @property {string} [orderDir] - 'asc' (1) or 'desc' (-1)
 */

/**
 * Factory for promos API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, patch: function, remove: function, addRule: function, updateRule: function }}
 */
function promosFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /promos - list promos.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PromosListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client.get("/promos", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /promos/:promoId - get promo by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.promoId - Promo id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({promoId, token, query = {}, headers}) {
    return client.get(`/promos/${promoId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /promos - create promo. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.promo - Promo payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({jwtToken, promo, token, headers}) {
    return client({
      url: "/promos",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {promo}
    });
  }

  /**
   * DELETE /promos/:promoId - remove promo. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.promoId - Promo id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({jwtToken, promoId, token, headers}) {
    return client({
      url: `/promos/${promoId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PATCH /promos/:promoId - update promo. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.promoId - Promo id
   * @param {Object} opts.update - Update payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  // eslint-disable-next-line no-shadow
  function update({jwtToken, token, promoId, update, headers}) {
    return client({
      url: `/promos/${promoId}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {update}
    });
  }

  /**
   * PATCH /promo/:promoId - patch promo with operations. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.promoId - Promo id
   * @param {Object} opts.operations - Patch operations
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function patch({jwtToken, token, promoId, operations, headers}) {
    return client({
      url: `/promo/${promoId}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {operations}
    });
  }

  /**
   * POST /promos/:promoId/rules - add promo rule. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.promoId - Promo id
   * @param {Object} opts.rule - Rule payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function addRule({jwtToken, token, promoId, rule, headers}) {
    return client({
      url: `/promos/${promoId}/rules`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {rule}
    });
  }

  /**
   * PUT /promos/:promoId/rules/:ruleId - update promo rule. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.promoId - Promo id
   * @param {string} opts.ruleId - Rule id
   * @param {Object} opts.rule - Rule payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function updateRule({jwtToken, token, promoId, ruleId, rule, headers}) {
    return client({
      url: `/promos/${promoId}/rules/${ruleId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {rule}
    });
  }

  return {
    all,
    get,
    create,
    update,
    patch,
    remove,
    addRule,
    updateRule
  };
}

module.exports = promosFactory;
