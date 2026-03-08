const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for Cardpointe terminals API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, remove: function, readCard: Object, ping: Object }}
 */
function cardpointeTerminalsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /cardpointe-terminals - list Cardpointe terminals. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, headers}) {
    return client.get("/cardpointe-terminals", {
      params: {},
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  /**
   * DELETE /cardpointe-terminals/:merchantId/:terminalId - remove terminal. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.merchantId - Merchant id
   * @param {string} opts.terminalId - Terminal id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({token, jwtToken, merchantId, terminalId, headers}) {
    return client({
      url: `/cardpointe-terminals/${merchantId}/${terminalId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  const readCard = {
    /**
     * GET /cardpointe-terminals/read-card/:readCardResultId - get read card result. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.readCardResultId - Read card result id (UUID v4)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, readCardResultId, headers}) {
      return client.get(`/cardpointe-terminals/read-card/${readCardResultId}`, {
        params: {},
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * POST /cardpointe-terminals/read-card - start read card session. API accepts optional query providerId.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.readCard - Read card payload (merchantId, terminalId, amount)
     * @param {string} [opts.providerId] - Provider (payment method) ID; if omitted, account ID is used
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    // eslint-disable-next-line no-shadow
    create({token, jwtToken, readCard, providerId, headers}) {
      return client({
        url: "/cardpointe-terminals/read-card",
        method: "post",
        params: providerId != null ? {providerId} : {},
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {readCard}
      });
    }
  };

  const ping = {
    /**
     * POST /cardpointe-terminals/ping - create ping. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.ping - Ping payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    // eslint-disable-next-line no-shadow
    create({token, jwtToken, ping, headers}) {
      return client({
        url: "/cardpointe-terminals/ping",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {ping}
      });
    }
  };


  return {
    all,
    remove,
    readCard,
    ping
  };
}
module.exports = {
  cardpointeTerminalsFactory
};
