const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} StripeTerminalsQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for Stripe terminals API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, simulate: function }}
 */
function stripeTerminalsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /stripe-terminals - list Stripe terminals.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @param {StripeTerminalsQuery} [opts.query] - Query params
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, headers, query = {}}) {
    return client.get("/stripe-terminals", {
      params: query,
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  /**
   * POST /stripe-terminals/:id/simulate - simulate Stripe payment.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Terminal id
   * @param {Object} opts.stripePayment - Stripe payment payload
   * @param {StripeTerminalsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function simulate({token, jwtToken, id, stripePayment, query = {}, headers}) {
    return client({
      url: `/stripe-terminals/${id}/simulate`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data: {stripePayment}
    });
  }

  return {
    all,
    simulate
  };
}
module.exports = stripeTerminalsFactory;
