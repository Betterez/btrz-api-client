const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for marketplace-modifiers endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryMarketplaceModifiersQuery
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
   * @param {InventoryMarketplaceModifiersQuery} [opts.query] - Optional query params (forwarded to API)
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
   * GET /marketplace-modifiers/:marketplaceModifierId - get marketplace modifier by id.
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
   * POST /marketplace-modifiers - create marketplace modifier.
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
   * DELETE /marketplace-modifiers/:marketplaceModifierId - remove marketplace modifier.
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
   * PUT /marketplace-modifiers/:marketplaceModifierId - update marketplace modifier.
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
