/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for invoice emails API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */
function emailsFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /emails — Send invoice by email to the given addresses.
   * Request body may be sent as root object or under key "email". On success the API emits webhook invoiceemail.created.
   *
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol (Authorization: Bearer)
   * @param {Object} opts.data - Request body (EmailPostData)
   * @param {string} opts.data.invoiceId - Invoice ID (required, 24-char hex ObjectId)
   * @param {string[]} opts.data.emails - Recipient email addresses (required)
   * @param {string} [opts.data.language] - Language code for template (e.g. "en-us")
   * @param {Object} [opts.query] - Query params (none used by this endpoint)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ status: "OK" }>>} Resolves with { status: "OK" } on success
   * @throws 400 WRONG_DATA, ACCOUNT_CANT_SEND_EMAILS, NO_VERIFIED_OR_ACTIVE_EMAIL, INVALID_EMAIL_TO_SEND
   * @throws 401 Unauthorized (missing/invalid X-API-KEY or Authorization)
   * @throws 404 INVOICE_NOT_FOUND
   * @throws 500 Internal server error
   */
  function create({token, jwtToken, data, query = {}, headers}) {
    return client({
      url: "/emails",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  return {
    create
  };
}

module.exports = emailsFactory;
