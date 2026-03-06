const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /seat-fees (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} SeatFeesListQuery
 * @property {string} [disabled] - Filter disabled/enabled [true, false]
 * @property {string} [providerId] - Provider account id to get seat fees for
 * @property {string} [currency] - ISO 4217 currency code; defaults to account currency
 */

/**
 * Factory for seat-fees API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function }}
 */
function seatfeesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /seat-fees - list seat fees.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {SeatFeesListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/seat-fees", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /seat-fees/:seatfeeId - get seat fee by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} opts.seatfeeId - Seat fee id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({seatfeeId, token, headers}) {
    return client.get(`/seat-fees/${seatfeeId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /seat-fees - create seat fee. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {Object} opts.seatfee - Seat fee payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({jwtToken, token, seatfee, headers}) {
    return client({
      url: "/seat-fees",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        seatfee
      }
    });
  }

  /**
   * PUT /seat-fees/:seatfeeId - update seat fee. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.seatfeeId - Seat fee id
   * @param {Object} opts.seatfee - Seat fee payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, seatfeeId, seatfee, headers}) {
    return client({
      url: `/seat-fees/${seatfeeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        seatfee
      }
    });
  }

  return {
    all,
    get,
    create,
    update
  };
}

module.exports = seatfeesFactory;
