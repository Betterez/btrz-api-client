/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for agencies endpoints (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, putCreditLimit: function }}
 */
function agenciesFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /agencies - create an agency (seller account) and link it to the provider network.
   * Requires X-API-KEY and Authorization (JWT).
   * @param {Object} opts
   * @param {string} opts.token - API key
   * @param {string} opts.jwtToken - JWT
   * @param {Object} opts.agency - agencyData payload ({ seller, network })
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, agency, headers}) {
    return client({
      url: "/agencies",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        agency
      }
    });
  }

  /**
   * PUT /agencies/:agencyId - update an agency.
   * @param {Object} opts
   * @param {string} opts.token - API key
   * @param {string} opts.jwtToken - JWT
   * @param {string} opts.agencyId - Agency (seller) ID, 24-char hex ObjectId. Must not be the provider's own accountId.
   * @param {Object} opts.agency - Agency payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, agencyId, agency, headers}) {
    return client({
      url: `/agencies/${agencyId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        agency
      }
    });
  }

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
    create,
    update,
    putCreditLimit
  };
}

module.exports = agenciesFactory;
