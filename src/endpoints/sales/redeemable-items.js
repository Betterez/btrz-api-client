/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} RedeemableItemsQuery
 * @property {string} [providerId] - Provider account ID
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
   * @param {string} opts.redeemableItemId - Redeemable item id
   * @param {RedeemableItemsQuery} [opts.query] - Query params
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
   * @param {RedeemableItemsQuery} [opts.query] - Query params
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
