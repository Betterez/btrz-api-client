

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for POST /infile-json (btrz-api-invoices). See post-infile-json-handler getSpec().
 * @typedef {Object} InvoiceInfileJsonPostQuery
 * @property {string|boolean} [onlyValidateRequest] - If true, only validates the payload and does not process it
 */

/**
 * Factory for Infile JSON invoice API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, validateCreate: function }}
 */


function infileJsonFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /infile-json - create Infile JSON invoice.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Request body
   * @param {InvoiceInfileJsonPostQuery} [opts.query] - onlyValidateRequest (optional)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const data = _ref2.data;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      url: "/infile-json",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  /**
   * POST /infile-json - validate Infile JSON invoice request (onlyValidateRequest=true).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Request body
   * @param {InvoiceInfileJsonPostQuery} [opts.query] - onlyValidateRequest (set to true internally)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function validateCreate(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const data = _ref3.data;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

    // eslint-disable-next-line no-param-reassign
    query.onlyValidateRequest = true;
    return client({
      url: "/infile-json",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  return {
    create,
    validateCreate
  };
}

module.exports = infileJsonFactory;
