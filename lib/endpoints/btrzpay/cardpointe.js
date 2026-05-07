

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for Cardpointe terminals API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, remove: function, readCard: Object, ping: Object }}
 */


function cardpointeTerminalsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /cardpointe-terminals - list Cardpointe terminals. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const headers = _ref2.headers;

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
  function remove(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const merchantId = _ref3.merchantId;
    const terminalId = _ref3.terminalId;
    const headers = _ref3.headers;

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
    get: function get(_ref4) {
      const token = _ref4.token;
      const jwtToken = _ref4.jwtToken;
      const readCardResultId = _ref4.readCardResultId;
      const headers = _ref4.headers;

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
    create: function create(_ref5) {
      const token = _ref5.token;
      const jwtToken = _ref5.jwtToken;
      const readCard = _ref5.readCard;
      const providerId = _ref5.providerId;
      const headers = _ref5.headers;

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
    create: function create(_ref6) {
      const token = _ref6.token;
      const jwtToken = _ref6.jwtToken;
      const ping = _ref6.ping;
      const headers = _ref6.headers;

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
