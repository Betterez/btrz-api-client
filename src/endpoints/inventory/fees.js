const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for fees endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryFeesQuery
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
   * GET /fees/:feeId - get fee by id.
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
   * POST /fees - create fee.
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
   * PUT /fees/:feeId - update fee.
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
