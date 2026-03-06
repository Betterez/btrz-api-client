/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /redeemable-items/:redeemableItemId (btrz-api-sales get-redeemable-item getSpec).
 * @typedef {Object} RedeemableItemsGetQuery
 * @property {string} [providerId] - Provider account id
 * @property {string} [providerIds] - One or more provider account ids (comma-separated)
 * @property {string} [cartId] - Current cart id (item can be redeemed once per cart)
 */

/**
 * Query params for GET /redeemable-items list (btrz-api-sales get-redeemable-items getSpec).
 * @typedef {Object} RedeemableItemsListQuery
 * @property {string} [ids] - Redeemable item display ID or _id, comma-separated
 * @property {string} [providerId] - Provider account id
 * @property {string} [cartId] - Current cart id
 */

/**
 * Factory for redeemable-items API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, getValid: function }}
 */
function redeemableItemsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /redeemable-items/:redeemableItemId - get redeemable item by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.redeemableItemId - Redeemable item display ID or _id
   * @param {RedeemableItemsGetQuery} [opts.query] - Query params (providerId, providerIds, cartId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, redeemableItemId, query = {}, headers}) {
    return client({
      url: `/redeemable-items/${redeemableItemId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /redeemable-items - get valid redeemable items.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {RedeemableItemsListQuery} [opts.query] - Query params (ids, providerId, cartId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getValid({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/redeemable-items",
      params: query,
      headers: authorizationHeaders({token, jwtToken, headers})
    });
  }

  return {
    get,
    getValid
  };
}

module.exports = redeemableItemsFactory;
