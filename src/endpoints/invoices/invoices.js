/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /invoices (btrz-api-invoices). See get-handler getSpec().
 * @typedef {Object} InvoicesListQuery
 * @property {string} transactionId - Transaction id of the invoice (required)
 */

/**
 * Query params for GET /failures (btrz-api-invoices). See get-failures-handler getSpec().
 * @typedef {Object} InvoicesFailuresQuery
 * @property {string} [transactionId] - Transaction id of the invoice failure
 */

/**
 * Factory for invoices API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, getInvoicesFailures: function, retryInvoicing: function, overrideBuyerRetryInvoicing: function }}
 */
function invoicesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /invoices - list invoices.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InvoicesListQuery} [opts.query] - Query params (transactionId required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/invoices",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /invoices/:id - get invoice by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Invoice id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, id, query = {}, headers}) {
    return client({
      url: `/invoices/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /failures - list invoice failures.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InvoicesFailuresQuery} [opts.query] - Query params (transactionId optional)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getInvoicesFailures({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/failures",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * POST /retry - retry invoicing. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function retryInvoicing({token, jwtToken, data, query = {}, headers}) {
    return client({
      url: "/retry",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  /**
   * PUT /retry - override buyer and retry invoicing. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function overrideBuyerRetryInvoicing({token, jwtToken, data, query = {}, headers}) {
    return client({
      url: "/retry",
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  return {
    all,
    get,
    getInvoicesFailures,
    retryInvoicing,
    overrideBuyerRetryInvoicing
  };
}

module.exports = invoicesFactory;
