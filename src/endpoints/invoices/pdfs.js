/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /pdfs (btrz-api-invoices). Forwarded to API as-is.
 * @typedef {Object} InvoicePdfsListQuery
 */

/**
 * Factory for invoice PDFs API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
function pdfsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /pdfs - list invoice PDFs.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InvoicePdfsListQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {string} [opts.responseType] - Response type (e.g. "json", "blob")
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, responseType = "json", headers}) {
    return client({
      url: "/pdfs",
      method: "get",
      responseType,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  return {
    all
  };
}

module.exports = pdfsFactory;
