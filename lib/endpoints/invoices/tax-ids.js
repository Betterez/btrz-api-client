"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /tax-ids (btrz-api-invoices). See tax-ids get-handler getSpec().
 * @typedef {Object} TaxIdsListQuery
 * @property {string} taxNumber - Tax number to look up (required)
 * @property {string} country - ISO code of the country of the tax information (required)
 * @property {string} [invoiceProviderId] - Invoice provider id (24 hex chars)
 * @property {string} [documentType] - Tax identification type to check against validation service
 */

/**
 * Factory for invoice tax IDs API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */


function taxIdsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /tax-ids - list tax IDs.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {TaxIdsListQuery} opts.query - taxNumber, country; optional invoiceProviderId, documentType
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} 400 WRONG_DATA, INVALID_PROVIDER_ID; 404 TAXID_NOT_FOUND
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/tax-ids",
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query
    });
  }

  return {
    all: all
  };
}

module.exports = taxIdsFactory;