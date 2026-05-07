"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for invoice emails API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */


function emailsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
  function create(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        data = _ref2.data,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/emails",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query,
      data: data
    });
  }

  return {
    create: create
  };
}

module.exports = emailsFactory;