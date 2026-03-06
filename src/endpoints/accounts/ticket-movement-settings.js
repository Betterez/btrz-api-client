const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for ticket-movement-settings API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function ticketMovementSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /ticket-movement-settings - get ticket movement settings for the account.
   * No query or path parameters. See get-handler getSpec() in btrz-api-accounts for response schema.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<Object>>} Response body: ticket movement settings object. Errors: 401, 500
   */
  function get({token, jwtToken, headers}) {
    return client({
      url: "/ticket-movement-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /ticket-movement-settings - update ticket movement settings for the account.
   * Body must include all required fields (see put-handler getSpec() in btrz-api-accounts).
   * Side effect: persists to account.preferences.ticketMovements.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.ticketMovementSettings - Full settings payload (see put-handler getSpec())
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<Object>>} Updated settings. Errors: 400, 401, 500
   */
  function update({token, jwtToken, ticketMovementSettings, headers}) {
    return client({
      url: "/ticket-movement-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: ticketMovementSettings
    });
  }

  return {
    get,
    update
  };
}

module.exports = ticketMovementSettingsFactory;
