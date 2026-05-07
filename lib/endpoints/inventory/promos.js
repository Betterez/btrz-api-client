

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

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
 * Promo rule payload for POST/PUT rule endpoints (subset; see inventory PromoRule model).
 * @typedef {Object} PromoRulePayload
 * @property {boolean} [requireSameOperation] - When true and minPassengersQty &gt; 0, minimum is evaluated per journey.
 * @property {string[]} [excludedFareTypes] - When fareId is empty and minPassengersQty &gt; 0, passengers with these fare types are excluded from the minimum count. Must be empty when fareId is set.
 */

/**
 * Promo create / PATCH update body (subset; see inventory API models for full shape).
 * Group-style behavior is configured per rule via minPassengersQty, requireSameOperation, and excludedFareTypes (not on the promo root).
 * @typedef {Object} PromoUpdateRequest
 */

/**
 * Factory for promos API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, patch: function, remove: function, addRule: function, updateRule: function }}
 */


function promosFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /promos - list promos.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PromosListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ promos: Array<object>, total: number }>>}
   *   Resolves with paginated promos; response.data has Promos shape.
   * @throws When the request fails (400/401/404/500). Body: WRONG_DATA, PROMO_NOT_FOUND.
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/promos", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
  function get(_ref3) {
    const promoId = _ref3.promoId;
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

    return client.get(`/promos/${promoId}`, {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /promos - create promo. No query params. Requires BETTEREZ_APP JWT or API key. Emits promo.created.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PromoUpdateRequest} opts.promo - Promo payload; must not include _id.
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<object>>} Resolves with created Promo.
   * @throws When the request fails (400/401/500). Body: WRONG_DATA, INTERNALID_USED,
   *   CANNOT_CREATE_PROMO_WITH_ID, INVALID_PAYMENT_METHOD_TYPE, etc.
   */
  function create(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const promo = _ref4.promo;
    const token = _ref4.token;
    const headers = _ref4.headers;

    return client({
      url: "/promos",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {promo}
    });
  }

  /**
   * DELETE /promos/:promoId - disable promo (soft delete). No query params. Requires BETTEREZ_APP. Emits promo.deleted.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.promoId - Promo id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} Resolves with disabled promo.
   * @throws When the request fails (400/401/404/500). Body: WRONG_DATA, INVALID_PROMO_ID, PROMO_NOT_FOUND.
   */
  function remove(_ref5) {
    const jwtToken = _ref5.jwtToken;
    const promoId = _ref5.promoId;
    const token = _ref5.token;
    const headers = _ref5.headers;

    return client({
      url: `/promos/${promoId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PATCH /promos/:promoId - update promo (partial). No query params. Requires BETTEREZ_APP. Emits promo.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.promoId - Promo id
   * @param {PromoUpdateRequest} opts.update - Partial update.
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<object>>} Resolves with updated Promo.
   * @throws When the request fails (400/401/404/500). Body: WRONG_DATA, INTERNALID_USED, PROMO_NOT_FOUND, etc.
   */
  // eslint-disable-next-line no-shadow
  function update(_ref6) {
    const jwtToken = _ref6.jwtToken;
    const token = _ref6.token;
    const promoId = _ref6.promoId;
    const update = _ref6.update;
    const headers = _ref6.headers;

    return client({
      url: `/promos/${promoId}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {update}
    });
  }

  /**
   * PATCH /promo/:promoId - update rule availability (add/subtract). No query params. Emits promo.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.promoId - Promo id
   * @param {Object} opts.operations - Array of PromoUpdateOperation (op, path, value).
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<object>>} Resolves with body `{ results, promo? }`: patch outcome plus full persisted promo after a successful update (same document emitted on `promo.updated`).
   * @throws When the request fails (400/401/404/500).
   */
  function patch(_ref7) {
    const jwtToken = _ref7.jwtToken;
    const token = _ref7.token;
    const promoId = _ref7.promoId;
    const operations = _ref7.operations;
    const headers = _ref7.headers;

    return client({
      url: `/promo/${promoId}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {operations}
    });
  }

  /**
   * POST /promos/:promoId/rules - add promo rule. No query params. Requires BETTEREZ_APP. May emit promo.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.promoId - Promo id
   * @param {PromoRulePayload} opts.rule - Rule payload (subset of PromoRule).
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<object>>} Resolves with Promo including new rule.
   * @throws When the request fails (400/401/404/500). Body: WRONG_DATA, INVALID_PRODUCT_ID, INVALID_FARE_ID, etc.
   */
  function addRule(_ref8) {
    const jwtToken = _ref8.jwtToken;
    const token = _ref8.token;
    const promoId = _ref8.promoId;
    const rule = _ref8.rule;
    const headers = _ref8.headers;

    return client({
      url: `/promos/${promoId}/rules`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {rule}
    });
  }

  /**
   * PUT /promos/:promoId/rules/:ruleId - update promo rule. No query params. Requires BETTEREZ_APP. Emits promo.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.promoId - Promo id
   * @param {string} opts.ruleId - Rule id
   * @param {PromoRulePayload} opts.rule - Full rule payload (subset of PromoRule).
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<object>>} Resolves with updated Promo.
   * @throws When the request fails (400/401/404/500). Body: WRONG_DATA, INVALID_PRODUCT_ID, INVALID_FARE_ID, etc.
   */
  function updateRule(_ref9) {
    const jwtToken = _ref9.jwtToken;
    const token = _ref9.token;
    const promoId = _ref9.promoId;
    const ruleId = _ref9.ruleId;
    const rule = _ref9.rule;
    const headers = _ref9.headers;

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
