

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /payment-providers (btrz-api-sales get-payment-providers getSpec).
 * @typedef {Object} PaymentProvidersListQuery
 * @property {string} [providerId] - Provider id to get payment providers for
 * @property {string} [channel] - Channel to get payment providers for
 * @property {string} [enabled] - Filter by enabled [true, false]
 */

/**
 * Factory for payment-providers API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */


function paymentProvidersFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /payment-providers - list payment providers.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PaymentProvidersListQuery} [opts.query] - Query params (providerId, channel, enabled)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/payment-providers", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = paymentProvidersFactory;
