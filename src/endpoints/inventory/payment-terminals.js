const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for payment-terminals API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
function paymentTerminalFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /payment-terminals - list payment terminals. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/payment-terminals", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /payment-terminals/:paymentTerminalId - get payment terminal by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} opts.paymentTerminalId - Payment terminal id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({paymentTerminalId, token, headers}) {
    return client.get(`/payment-terminals/${paymentTerminalId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /payment-terminals - create payment terminal. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {Object} opts.paymentTerminal - Payment terminal payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({jwtToken, token, paymentTerminal, headers}) {
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
   * @param {string} opts.paymentTerminalId - Payment terminal id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({jwtToken, paymentTerminalId, token, headers}) {
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
   * @param {string} opts.paymentTerminalId - Payment terminal id
   * @param {Object} opts.paymentTerminal - Payment terminal payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, paymentTerminalId, paymentTerminal, headers}) {
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
