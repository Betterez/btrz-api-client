const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /fees (btrz-api-inventory). See fees get-handler getSpec().
 * @typedef {Object} InventoryFeesQuery
 * @property {string} [providerIds] - Provider IDs to get fees for
 * @property {string} [rules] - Rules where the fees apply
 * @property {string} [productId] - Product ID for the fee
 * @property {string} [internalId] - Fee internal id
 */

/**
 * Factory for fees API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function }}
 */
function feesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /fees - list fees.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {InventoryFeesQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client.get("/fees", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /fees/:feeId - get fee by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.feeId - Fee id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, feeId, headers}) {
    return client.get(`/fees/${feeId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /fees - create fee. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.fee - Fee payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, fee, headers}) {
    return client({
      url: "/fees",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {fee}
    });
  }

  /**
   * PUT /fees/:feeId - update fee. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.feeId - Fee id
   * @param {Object} opts.fee - Fee payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, feeId, fee, headers}) {
    return client({
      url: `/fees/${feeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {fee}
    });
  }

  return {
    all,
    get,
    create,
    update
  };
}

module.exports = feesFactory;
