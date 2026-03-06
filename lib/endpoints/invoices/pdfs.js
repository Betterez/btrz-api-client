"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

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


function pdfsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        _ref2$responseType = _ref2.responseType,
        responseType = _ref2$responseType === undefined ? "json" : _ref2$responseType,
        headers = _ref2.headers;

    return client({
      url: "/pdfs",
      method: "get",
      responseType: responseType,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query
    });
  }

  return {
    all: all
  };
}

module.exports = pdfsFactory;