const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for multiproduct-sales-settings API (btrz-api-accounts). Multi-product sales settings (product/station/fare/fareClass mappings).
 * Requires BETTEREZ_APP audience. PUT emits webhooks networks.created or networks.updated.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function multiproductSalesSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /multiproduct-sales-settings – Get multi-product sales settings for the account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ multiProductSettings: object }>>}
   */
  function get({token, jwtToken, headers}) {
    return client({
      url: "/multiproduct-sales-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /multiproduct-sales-settings – Create or update multi-product sales settings (upsert). Body: MultiProductSettingsPayload (productsMapping, stationsMapping, faresMapping, fareClassesMapping). Emits networks.created or networks.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - multiProductSettings payload (productsMapping, stationsMapping, faresMapping, fareClassesMapping; each key ObjectId, each value array of ObjectIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ multiProductSettings: object }>>}
   */
  function update({token, jwtToken, data, headers}) {
    return client({
      url: "/multiproduct-sales-settings",
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    get,
    update
  };
}

module.exports = multiproductSalesSettingsFactory;
