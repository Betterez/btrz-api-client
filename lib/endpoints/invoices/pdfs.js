"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /pdfs (btrz-api-invoices). See pdfs get-handler getSpec().
 * @typedef {Object} PdfsQuery
 * @property {string} transactionId - Transaction ID of the invoice (required, 24-char hex ObjectId)
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
   * GET /pdfs — Returns the invoice PDF for the invoice associated with the given transaction.
   * Response is binary (application/pdf) with Content-Disposition attachment; filename=invoice-{invoiceId}.pdf.
   * Use responseType "blob" or "arraybuffer" to receive binary data.
   *
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {PdfsQuery} [opts.query] - Query; transactionId (required)
   * @param {string} [opts.responseType] - Response type: "blob" or "arraybuffer" for binary PDF; "json" default
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<ArrayBuffer|Blob|*>>} PDF binary when responseType is blob/arraybuffer
   * @throws 400 WRONG_DATA — transactionId is required
   * @throws 401 Unauthorized
   * @throws 404 INVOICE_NOT_FOUND — Invoice not found for the transactionId
   * @throws 500 Internal server error (e.g. unsupported invoice provider type)
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