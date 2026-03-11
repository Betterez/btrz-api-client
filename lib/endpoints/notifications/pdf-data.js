"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET pdf-templates-processing routes (btrz-api-notifications). Client uses type/family to resolve path.
 * @typedef {Object} PdfDataGetQuery
 * @property {string} type - Document type; determines path (e.g. product, giftCertificate, voucher, transaction, ssr, manifest, passengersManifest, order, order_confirmation, cancellation, change, shift, invoice, parcelManifest, startingBalance, partialShiftDeposits, bankDepositSlip, terminalVoucher, manualTickets, etc.)
 * @property {string} [family] - When type is "product": "ticket" | "reservation" | "paid in" | "paid out" | "parcel" | "flexpass" | "bundle"
 */

/**
 * Factory for PDF data (JSON) endpoints (btrz-api-notifications). Resolves URL by query.type (and query.family when type is "product").
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */


function pdfDataFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET PDF data (JSON) by item id and type.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PdfDataGetQuery} [opts.query] - type (required for correct path); family when type is "product"
   * @param {string} opts.itemId - Item id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} response.data is JSON (structure depends on type)
   */
  // eslint-disable-next-line max-statements
  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        itemId = _ref2.itemId,
        headers = _ref2.headers;

    var url = "/pdf-tickets/" + itemId;
    if (query.type === "product") {
      switch (query.family) {
        case "ticket":
          url = "/pdf-tickets/" + itemId;
          break;
        case "reservation":
          url = "/pdf-reservations/" + itemId;
          break;
        case "paid in":
          url = "/pdf-paid-ins/" + itemId;
          break;
        case "paid out":
          url = "/pdf-paid-outs/" + itemId;
          break;
        case "parcel":
          url = "/pdf-parcels/" + itemId;
          break;
        case "flexpass":
          url = "/pdf-flexpasses/" + itemId;
          break;
        case "bundle":
          url = "/pdf-redeemable-items/" + itemId;
          break;
        default:
          break;
      }
    }

    if (query.type === "pre_trip_notification" || query.type === "post_trip_notification") {
      url = "/manifest-notification-data/" + itemId;
    }
    if (query.type === "parcel_confirmation") {
      url = "/pdf-parcels/" + itemId;
    }
    if (query.type === "redeemable_items_confirmation") {
      url = "/pdf-redeemable-items/" + itemId;
    }
    if (query.type === "sold_item_confirmation") {
      url = "/pdf-sold-items/" + itemId;
    }
    if (query.type === "customer_card_membership" || query.type === "scanning_badge" || query.type === "customer_activation" || query.type === "customer_activation_mobile" || query.type === "customer_password_reset" || query.type === "customer_password_reset_mobile") {
      url = "/pdf-customer/" + itemId;
    }
    if (query.type === "giftCertificate" || query.type === "gift_certificate_notification") {
      url = "/pdf-gift-certificates/" + itemId;
    }
    if (query.type === "user_password_reset") {
      url = "/pdf-users/" + itemId;
    }
    if (query.type === "voucher" || query.type === "voucher_notification" || query.type === "compensation_voucher") {
      url = "/pdf-vouchers/" + itemId;
    }
    if (query.type === "new_account" || query.type === "new_seller_account" || query.type === "interline_provider_invite") {
      url = "/pdf-accounts/" + itemId;
    }
    if (query.type === "transaction" || query.type === "operator_purchase" || query.type === "operator_ssr") {
      url = "/pdf-transactions/" + itemId;
    }
    if (query.type === "operator_manifest_capacity") {
      url = "/pdf-operator-manifest-capacities/" + itemId;
    }
    if (query.type === "ssr") {
      url = "/pdf-ssrs/" + itemId;
    }
    if (query.type === "passengersManifest") {
      url = "/pdf-passengers-manifests/" + itemId;
    }
    if (query.type === "reaccomodation" || query.type === "ticket_movement") {
      url = "/pdf-reaccomodation/" + itemId;
    }
    if (query.type === "manifest" || query.type === "manifest_notification") {
      url = "/pdf-manifests/" + itemId;
    }
    var orderTypes = ["order", "order_confirmation", "cancellation", "change"];
    if (orderTypes.includes(query.type)) {
      url = "/pdf-orders/" + itemId;
    }
    if (query.type === "shift") {
      url = "/pdf-shifts/" + itemId;
    }
    if (query.type === "remainderSlip") {
      url = "/pdf-remainder-slip/" + itemId;
    }
    if (query.type === "exchange") {
      url = "/pdf-exchanges/" + itemId;
    }
    if (query.type === "invoice") {
      url = "/pdf-invoices/" + itemId;
    }
    if (query.type === "locationClosure") {
      url = "/pdf-location-closures/" + itemId;
    }
    if (query.type === "parcelManifest") {
      url = "/pdf-parcels-manifests/" + itemId;
    }
    if (query.type === "startingBalance") {
      url = "/pdf-starting-balance/" + itemId;
    }
    if (query.type === "partialShiftDeposits") {
      url = "/pdf-partial-shift-deposits/" + itemId;
    }
    if (query.type === "shiftLocationClosure") {
      url = "/pdf-shift-location-closures/" + itemId;
    }
    if (query.type === "bankDepositSlip") {
      url = "/pdf-bank-deposit-slips/" + itemId;
    }
    if (query.type === "terminalVoucher") {
      url = "/pdf-terminal-voucher/" + itemId;
    }
    if (query.type === "manualTickets") {
      url = "/pdf-manual-tickets/" + itemId;
    }

    return client.get(url, {
      params: query,
      headers: authorizationHeaders({
        token: token,
        jwtToken: jwtToken,
        internalAuthTokenProvider: internalAuthTokenProvider,
        headers: headers
      })
    });
  }

  return {
    get: get
  };
}

module.exports = pdfDataFactory;