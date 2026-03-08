"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for Square webhooks API (btrz-api-payments). Used to forward or simulate Square webhook requests to the Payments API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */


function squareWebhooksFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /square-webhooks/:providerId - send Square webhook payload to the Payments API. API verifies x-square-signature when present. Body must include type and data (Square webhook format).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.providerId - Provider ID (square_terminal payment method owner)
   * @param {Object} opts.data - Request body (Square webhook payload: type, data required; optional merchant_id, event_id, created_at)
   * @param {Object} [opts.headers] - Optional headers (e.g. x-square-signature for verification)
   * @returns {Promise<import("axios").AxiosResponse<{ status: "OK" }>>}
   */
  function create(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        data = _ref2.data,
        providerId = _ref2.providerId,
        headers = _ref2.headers;

    return client({
      url: "/square-webhooks/" + providerId,
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  return {
    create: create
  };
}

/**
 * Factory for Square terminals API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
function squareTerminalsFactory(_ref3) {
  var client = _ref3.client,
      internalAuthTokenProvider = _ref3.internalAuthTokenProvider;

  /**
   * GET /square-terminals - list Square terminals for the account. Requires JWT (BETTEREZ_APP or MOBILE_SCANNER). Response body: { terminals } with terminal objects (id, name, code, deviceId, productType, locationId, status, pairBy, createdAt, statusChangedAt).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ terminals: Array<{ id: string, name: string, code: string, deviceId?: string, productType?: string, locationId: string, status?: string, pairBy?: string, createdAt?: string, statusChangedAt?: string }> }>>}
   */
  function get(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        headers = _ref4.headers;

    return client.get("/square-terminals", {
      params: {},
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  return {
    get: get
  };
}
module.exports = {
  squareWebhooksFactory: squareWebhooksFactory,
  squareTerminalsFactory: squareTerminalsFactory
};