

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for payment-terminals API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function paymentTerminalFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /payment-terminals - list payment terminals. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ paymentTerminals: Object[], next?: string, previous?: string, count: number }>>}
   * @throws When the request fails (401 Unauthorized, 500 Internal Server Error)
   */
  function all(_ref2) {
    const token = _ref2.token;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/payment-terminals", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /payment-terminals/:paymentTerminalId - get payment terminal by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} opts.paymentTerminalId - Payment terminal id (24-char hex ObjectId)
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ paymentTerminal: Object }>>}
   * @throws When the request fails (400 INVALID_PAYMENT_TERMINAL_ID, 401, 404 PAYMENT_TERMINAL_NOT_FOUND, 500)
   */
  function get(_ref3) {
    const paymentTerminalId = _ref3.paymentTerminalId;
    const token = _ref3.token;
    const headers = _ref3.headers;

    return client.get(`/payment-terminals/${paymentTerminalId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /payment-terminals - create payment terminal. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {Object} opts.paymentTerminal - Payment terminal payload (name, protocol, ip, locationId, partNumber, serialNumber)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ paymentTerminal: Object }>>}
   * @throws When the request fails (400 WRONG_DATA, 401, 500)
   */
  function create(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const paymentTerminal = _ref4.paymentTerminal;
    const headers = _ref4.headers;

    return client({
      url: "/payment-terminals",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        paymentTerminal
      }
    });
  }

  /**
   * DELETE /payment-terminals/:paymentTerminalId - remove payment terminal. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentTerminalId - Payment terminal id (24-char hex ObjectId)
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ paymentTerminalId: string }>>}
   * @throws When the request fails (400 INVALID_PAYMENT_TERMINAL_ID, 401, 404 PAYMENT_TERMINAL_NOT_FOUND, 500)
   */
  function remove(_ref5) {
    const jwtToken = _ref5.jwtToken;
    const paymentTerminalId = _ref5.paymentTerminalId;
    const token = _ref5.token;
    const headers = _ref5.headers;

    return client({
      url: `/payment-terminals/${paymentTerminalId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /payment-terminals/:paymentTerminalId - update payment terminal. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.paymentTerminalId - Payment terminal id (24-char hex ObjectId)
   * @param {Object} opts.paymentTerminal - Payment terminal payload (name, protocol, ip, locationId, partNumber, serialNumber)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ paymentTerminal: Object }>>}
   * @throws When the request fails (400 WRONG_DATA, 401, 404 PAYMENT_TERMINAL_NOT_FOUND, 500)
   */
  function update(_ref6) {
    const jwtToken = _ref6.jwtToken;
    const token = _ref6.token;
    const paymentTerminalId = _ref6.paymentTerminalId;
    const paymentTerminal = _ref6.paymentTerminal;
    const headers = _ref6.headers;

    return client({
      url: `/payment-terminals/${paymentTerminalId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        paymentTerminal
      }
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = paymentTerminalFactory;
