/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for agencies endpoints (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ putCreditLimit: function }}
 */
function agenciesFactory({client, internalAuthTokenProvider}) {
  /**
   * PUT /agencies/:agencyId/credit-limit - update credit limit for an agency (seller) in the provider's network.
   * Requires BETTEREZ_APP audience. Request body can be { limitAmount, unlimited } or { creditLimit: { limitAmount, unlimited } }.
   * Side effect: Emits webhook event creditlimit.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.agencyId - Agency (seller) ID, 24-char hex ObjectId. Must not be the provider's own accountId.
   * @param {Object} opts.data - Credit limit payload: { limitAmount: number, unlimited: boolean } or { creditLimit: { limitAmount, unlimited } }
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ creditLimit: { _id: string, sellerId: string, providerId: string, unlimited: boolean, overrideLimit: number, currentLimit: number } }>>}
   */
  function putCreditLimit({token, jwtToken, agencyId, data, headers}) {
    return client({
      url: `/agencies/${agencyId}/credit-limit`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    putCreditLimit
  };
}

module.exports = agenciesFactory;
