const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for webhooks emit API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ emit: function }}
 */
function webhooksFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /emit - emit webhook.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.webhook - Webhook payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function emit({token, jwtToken, webhook, headers}) {
    return client({
      url: "/emit",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: webhook
    });
  }

  return {
    emit
  };
}

module.exports = webhooksFactory;
