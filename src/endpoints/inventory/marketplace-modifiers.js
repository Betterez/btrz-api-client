const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for GET /marketplace-modifiers (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} MarketplaceModifiersListQuery
 * @property {string} [externalField1] - Filter by externalField1
 * @property {string} [externalField2] - Filter by externalField2
 * @property {string} [externalField3] - Filter by externalField3
 * @property {string} [createdBy] - Comma-separated user IDs (created by)
 * @property {string} [updatedBy] - Comma-separated user IDs (updated by)
 * @property {string} [earliestPurchaseDate] - ISO 8601 datetime (purchase on or after)
 * @property {string} [latestPurchaseDate] - ISO 8601 datetime (purchase on or before)
 * @property {string} [earliestTravelDate] - ISO 8601 datetime (trip depart on or after)
 * @property {string} [latestTravelDate] - ISO 8601 datetime (trip depart on or before)
 */

/**
 * Factory for marketplace-modifiers API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
function marketplaceModifierFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /marketplace-modifiers - list marketplace modifiers.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {MarketplaceModifiersListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/marketplace-modifiers", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /marketplace-modifiers/:marketplaceModifierId - get marketplace modifier by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} opts.marketplaceModifierId - Marketplace modifier id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({marketplaceModifierId, token, headers}) {
    return client.get(`/marketplace-modifiers/${marketplaceModifierId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /marketplace-modifiers - create marketplace modifier. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {Object} opts.marketplaceModifier - Marketplace modifier payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({jwtToken, token, marketplaceModifier, headers}) {
    return client({
      url: "/marketplace-modifiers",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        marketplaceModifier
      }
    });
  }

  /**
   * DELETE /marketplace-modifiers/:marketplaceModifierId - remove marketplace modifier. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.marketplaceModifierId - Marketplace modifier id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({jwtToken, marketplaceModifierId, token, headers}) {
    return client({
      url: `/marketplace-modifiers/${marketplaceModifierId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /marketplace-modifiers/:marketplaceModifierId - update marketplace modifier. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.marketplaceModifierId - Marketplace modifier id
   * @param {Object} opts.marketplaceModifier - Marketplace modifier payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, marketplaceModifierId, marketplaceModifier, headers}) {
    return client({
      url: `/marketplace-modifiers/${marketplaceModifierId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        marketplaceModifier
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

module.exports = marketplaceModifierFactory;
