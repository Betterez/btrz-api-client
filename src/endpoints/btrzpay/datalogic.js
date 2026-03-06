const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} DatalogicQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for Datalogic API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ payments: Object, referenceNumber: Object, authCode: Object }}
 */
function datalogicFactory({client}) {
  const payments = {
    /**
     * GET /datalogic/payments - list Datalogic payments.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {DatalogicQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all({token, jwtToken, headers, query, internalAuthTokenProvider}) {
      return client({
        url: "/datalogic/payments",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * POST /datalogic/payments/:referenceNumber - update Datalogic payment.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.referenceNumber - Reference number
     * @param {Object} [opts.data] - Request body
     * @param {DatalogicQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update({token, jwtToken, headers, query, referenceNumber, data, internalAuthTokenProvider}) {
      return client({
        url: `/datalogic/payments/${referenceNumber}`,
        method: "post",
        params: query,
        data,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * POST /datalogic/reverse/:referenceNumber - reverse Datalogic payment.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.referenceNumber - Reference number
     * @param {Object} [opts.data] - Request body
     * @param {DatalogicQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    reverse({token, jwtToken, headers, query, referenceNumber, data, internalAuthTokenProvider}) {
      return client({
        url: `/datalogic/reverse/${referenceNumber}`,
        method: "post",
        params: query,
        data,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const referenceNumber = {
    /**
     * GET /datalogic/reference-number - get reference number.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, headers, internalAuthTokenProvider}) {
      return client({
        url: "/datalogic/reference-number",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const authCode = {
    /**
     * GET /datalogic/auth-code - get auth code.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, headers, internalAuthTokenProvider}) {
      return client({
        url: "/datalogic/auth-code",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    payments,
    referenceNumber,
    authCode
  };
}

module.exports = datalogicFactory;
