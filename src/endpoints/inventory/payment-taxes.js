const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /payment-taxes (btrz-api-inventory). See payment-taxes get-handler getSpec().
 * @typedef {Object} PaymentTaxesListQuery
 * @property {string} [providerIds] - Comma separated ids of the accounts to read (other accounts only with internal tokens)
 * @property {boolean} [enabled] - With true, disabled payment taxes are left out
 */

/**
 * Factory for payment-taxes API (btrz-api-inventory).
 * Bodies are the plain payment tax, without a wrapper.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
function paymentTaxesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /payment-taxes - list the payment taxes of the given accounts (the caller's by default). Deleted ones are never returned.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PaymentTaxesListQuery} [opts.query] - Query params (providerIds, enabled)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ paymentTaxes: Array }>>}
   * @throws When response is 4xx/5xx (400 WRONG_DATA, 401, 500)
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client.get("/payment-taxes", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /payment-taxes/:paymentTaxId - get one payment tax of the account, enabled or not.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Payment tax id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ paymentTax: Object }>>}
   * @throws When response is 4xx/5xx (400 WRONG_DATA, 401, 404, 500)
   */
  function get({token, jwtToken, id, headers}) {
    return client.get(`/payment-taxes/${id}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /payment-taxes - create a payment tax.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.paymentTax - Payment tax (PaymentTaxData), sent as the body itself
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ paymentTax: Object }>>}
   * @throws When response is 4xx/5xx (400 WRONG_DATA, INVALID_DOCUMENT_TYPE_ID, INVALID_PRODUCT_ID,
   * INVALID_PAYMENT_METHOD_ID, INVALID_COUNTRY, PAYMENT_TAX_OVERLAP; 401; 403; 500)
   */
  function create({token, jwtToken, paymentTax, headers}) {
    return client({
      url: "/payment-taxes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: paymentTax
    });
  }

  /**
   * PUT /payment-taxes/:paymentTaxId - replace a payment tax.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Payment tax id (24 hex characters)
   * @param {Object} opts.paymentTax - Payment tax (PaymentTaxData), sent as the body itself
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ paymentTax: Object }>>}
   * @throws When response is 4xx/5xx (400 as create; 401; 403; 404; 500)
   */
  function update({token, jwtToken, id, paymentTax, headers}) {
    return client({
      url: `/payment-taxes/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: paymentTax
    });
  }

  /**
   * DELETE /payment-taxes/:paymentTaxId - delete a payment tax (kept stored, marked deleted).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Payment tax id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ paymentTaxId: string }>>}
   * @throws When response is 4xx/5xx (400 WRONG_DATA, 401, 403, 404, 500)
   */
  function remove({token, jwtToken, id, headers}) {
    return client({
      url: `/payment-taxes/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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

module.exports = paymentTaxesFactory;
