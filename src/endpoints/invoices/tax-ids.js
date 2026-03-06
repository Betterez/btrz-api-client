/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /tax-ids (btrz-api-invoices). See tax-ids get-handler getSpec().
 * @typedef {Object} TaxIdsListQuery
 * @property {string} taxNumber - Tax number to look up (required)
 * @property {string} country - ISO code of the country of the tax information (required)
 * @property {string} [invoiceProviderId] - Invoice provider id (24-char hex ObjectId); optional, for external validation
 * @property {string} [documentType] - Tax identification type for validation (e.g. NIT, DPI for infile)
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
   * GET /tax-ids — List tax ID information (paginated). Merges internal tax IDs with external provider validation when invoiceProviderId is provided.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {TaxIdsListQuery} [opts.query] - taxNumber and country (required); optional invoiceProviderId, documentType
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ taxIds: Object[], total?: number, ... }>>}
   * @throws 400 WRONG_DATA, INVALID_PROVIDER_ID, INVALID_TAX_NUMBER, INVALID_PROVIDER_CREDENTIALS
   * @throws 401 Unauthorized
   * @throws 404 TAXID_NOT_FOUND, PROVIDER_NOT_FOUND
   * @throws 500 Internal server error
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
