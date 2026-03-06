const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /oxxo/:token/payments (btrz-api-payments getSpec).
 * @typedef {Object} OxxoPaymentsListQuery
 * @property {string} [referenceNumber] - Payment reference number
 */

/**
 * POST /oxxo/:token/payments/:referenceNumber and POST /oxxo/:token/reverse/:referenceNumber do not define
 * query params in backend getSpec (path + body only). Use for optional query keys forwarded as-is.
 * @typedef {Object} OxxoPostQuery
 */

/**
 * Factory for OXXO API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ token: Object, payments: Object }}
 */
function oxxoFactory({client, internalAuthTokenProvider: _internalAuthTokenProvider}) {
  const token = {
    /**
     * GET /oxxo/token - get OXXO token.
     * @param {Object} opts
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider]
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({jwtToken, headers, internalAuthTokenProvider}) {
      return client({
        url: "/oxxo/token",
        headers: authorizationHeaders({jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const payments = {
    /**
     * GET /oxxo/:oxxoToken/payments - list OXXO payments.
     * @param {Object} opts
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.oxxoToken - OXXO token
     * @param {OxxoPaymentsListQuery} [opts.query] - referenceNumber (optional)
     * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider]
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<import("axios").AxiosResponse>} GetOxxoPaymentsResponse; 400 ERROR_GETTING_PAYMENT_METHODS
     */
    all({jwtToken, headers, oxxoToken, query, internalAuthTokenProvider}) {
      return client({
        url: `/oxxo/${oxxoToken}/payments`,
        params: query,
        headers: authorizationHeaders({jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * POST /oxxo/:oxxoToken/payments/:referenceNumber - update OXXO payment.
     * @param {Object} opts
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.oxxoToken - OXXO token
     * @param {string} opts.referenceNumber - Payment reference number
     * @param {OxxoPostQuery} [opts.query] - Optional query params (backend getSpec has none; forwarded as-is)
     * @param {Object} opts.data - Request body (PostOxxoPaymentsPayload)
     * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider]
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update({jwtToken, headers, oxxoToken, query, referenceNumber, data, internalAuthTokenProvider}) {
      return client({
        url: `/oxxo/${oxxoToken}/payments/${referenceNumber}`,
        method: "post",
        params: query,
        data,
        headers: authorizationHeaders({jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * POST /oxxo/:oxxoToken/reverse/:referenceNumber - reverse OXXO payment.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.oxxoToken - OXXO token
     * @param {string} opts.referenceNumber - Payment reference number
     * @param {OxxoPostQuery} [opts.query] - Optional query params (backend getSpec has none; forwarded as-is)
     * @param {Object} [opts.data] - Request body (PostOxxoReversePayload)
     * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider]
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    reverse({token: authToken, jwtToken, headers, query, referenceNumber, data, internalAuthTokenProvider, oxxoToken}) {
      return client({
        url: `/oxxo/${oxxoToken}/reverse/${referenceNumber}`,
        method: "post",
        params: query,
        data,
        headers: authorizationHeaders({token: authToken, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    token,
    payments
  };
}

module.exports = oxxoFactory;
