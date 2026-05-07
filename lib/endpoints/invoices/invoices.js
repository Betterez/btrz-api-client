

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

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


function invoicesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /invoices — List invoices by transaction (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {InvoicesListQuery} [opts.query] - Query; transactionId (required) = 24-char hex ObjectId
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ invoices: Object[], total: number, page?: number, ... }>>}
   * @throws 401 Unauthorized
   * @throws 500 Internal server error
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      url: "/invoices",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /invoices/:id — Get a single invoice by ID.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {string} opts.id - Invoice ID (24-character hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ invoice: Object }>>}
   * @throws 400 WRONG_DATA, INVALID_INVOICE_ID
   * @throws 401 Unauthorized
   * @throws 404 INVOICE_NOT_FOUND
   * @throws 500 Internal server error
   */
  function get(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const id = _ref3.id;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

    return client({
      url: `/invoices/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /failures — List invoice failures (paginated). Optional transactionId filter.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {InvoicesFailuresQuery} [opts.query] - Query; transactionId optional (24-char hex; if present must be valid)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ invoicesFailures: Object[], total: number, ... }>>}
   * @throws 400 WRONG_DATA, INVALID_TRANSACTION_ID (if transactionId provided and invalid)
   * @throws 401 Unauthorized
   * @throws 500 Internal server error
   */
  function getInvoicesFailures(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const _ref4$query = _ref4.query;
    const query = _ref4$query === undefined ? {} : _ref4$query;
    const headers = _ref4.headers;

    return client({
      url: "/failures",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * POST /retry — Retry invoicing from an invoice failure using saved data. Body: transactionId (required).
   * On success may emit webhooks invoices.created or invoices.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {Object} opts.data - Body: { transactionId } (transactionId = 24-char hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ invoice: Object }>>}
   * @throws 400 WRONG_DATA, INVOICE_NOT_CREATED, INVOICE_PROVIDER_TYPE_NOT_SUPPORTED, INVOICE_PROVIDER_NOT_FOUND, TRANSACTION_ALREADY_INVOICED
   * @throws 401 Unauthorized
   * @throws 404 TRANSACTION_NOT_FOUND, INVOICE_FAILURE_NOT_FOUND
   * @throws 409 INFILE_SIGN_FAILED, INFILE_CERTIFICATION_FAILED
   * @throws 500 Internal server error
   */
  function retryInvoicing(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const data = _ref5.data;
    const _ref5$query = _ref5.query;
    const query = _ref5$query === undefined ? {} : _ref5$query;
    const headers = _ref5.headers;

    return client({
      url: "/retry",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  /**
   * PUT /retry — Override buyer and retry invoicing from an invoice failure. Body: retryData with transactionId and overrideBuyer.
   * On success may emit webhooks invoices.created or invoices.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {Object} opts.data - Body: { transactionId, overrideBuyer } (RetryPutData); overrideBuyer required when no certified invoice exists
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ invoice: Object }>>}
   * @throws 400 WRONG_DATA, INVOICE_NOT_CREATED, INVOICE_PROVIDER_TYPE_NOT_SUPPORTED, INVOICE_PROVIDER_NOT_FOUND, TRANSACTION_ALREADY_INVOICED, OVERRIDE_BUYER_IS_MANDATORY
   * @throws 401 Unauthorized
   * @throws 404 TRANSACTION_NOT_FOUND, INVOICE_FAILURE_NOT_FOUND
   * @throws 409 INFILE_SIGN_FAILED, INFILE_CERTIFICATION_FAILED
   * @throws 500 Internal server error
   */
  function overrideBuyerRetryInvoicing(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const data = _ref6.data;
    const _ref6$query = _ref6.query;
    const query = _ref6$query === undefined ? {} : _ref6$query;
    const headers = _ref6.headers;

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
