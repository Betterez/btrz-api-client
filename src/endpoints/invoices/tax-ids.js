/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /tax-ids (btrz-api-invoices getSpec).
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
function taxIdsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /tax-ids - list tax IDs.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {TaxIdsListQuery} opts.query - taxNumber, country; optional invoiceProviderId, documentType
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} 400 WRONG_DATA, INVALID_PROVIDER_ID; 404 TAXID_NOT_FOUND
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/tax-ids",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  return {
    all
  };
}

module.exports = taxIdsFactory;
