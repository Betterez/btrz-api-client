"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query parameters for GET /vouchers/{internalId} (btrz-api-sales getSpec).
 * @typedef {Object} VoucherGetQuery
 * @property {string} [firstName] - First name of the customer
 * @property {string} [lastName] - Last name of the customer
 * @property {string} [cartId] - Validates if voucher applies to any item in the cart; overrides productType, from, to, fareTypes
 * @property {string} [productType] - Product type of the voucher
 * @property {string} [from] - Station "from" to validate if voucher has routes
 * @property {string} [to] - Station "to" to validate if voucher has routes
 * @property {string} [fareTypes] - (DEPRECATED) Validates if voucher has one fare; use fareIds instead
 * @property {string} [fareIds] - Validates if voucher has one fare ID
 * @property {string} [displayCurrencyCode] - Display currency code for multi-currency accounts
 */

/**
 * Options object passed to get(). The client builds the URL from voucher.number and voucher.cartId, firstName, lastName, displayCurrencyCode.
 * @typedef {Object} VoucherGetOptionsVoucher
 * @property {string} number - Voucher internal ID (path param internalId)
 * @property {string} [cartId] - Sent as query cartId
 * @property {string} [firstName] - Sent as query firstName
 * @property {string} [lastName] - Sent as query lastName
 * @property {string} [displayCurrencyCode] - Sent as query displayCurrencyCode
 */

/**
 * Factory for voucher GET API (btrz-api-sales). GET /vouchers/{internalId}.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */


function voucherFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /vouchers/:number - get voucher by internal id (number). Query params from API: firstName, lastName, cartId, productType, from, to, fareTypes, fareIds, displayCurrencyCode.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {VoucherGetOptionsVoucher} opts.voucher - Voucher identifier and query fields: number (internalId), cartId, firstName, lastName, displayCurrencyCode
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} response.data is the Voucher (200); 400 Cart invalid, 401 Unauthorized, 404 Voucher not found
   */
  function get(_ref2) {
    var token = _ref2.token,
        voucher = _ref2.voucher,
        headers = _ref2.headers;

    return client({
      // eslint-disable-next-line max-len
      url: "/vouchers/" + voucher.number + "?cartId=" + voucher.cartId + "&firstName=" + voucher.firstName + "&lastName=" + voucher.lastName + "&displayCurrencyCode=" + (voucher.displayCurrencyCode || ""),
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    get: get
  };
}

module.exports = voucherFactory;