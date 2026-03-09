/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET pdf-templates-processing binary routes (btrz-api-notifications). Client uses type/family to resolve path.
 * @typedef {Object} PdfGetQuery
 * @property {string} type - Document type (e.g. product, giftCertificate, voucher, transaction, ssr, manifest, passengersManifest, order, shift, remainderSlip, exchange, invoice, locationClosure, parcelManifest, startingBalance, partialShiftDeposits, shiftLocationClosure, bankDepositSlip, terminalVoucher, manualTickets)
 * @property {string} [family] - When type is "product": "ticket" | "reservation" | "paid in" | "paid out" | "parcel" | "flexpass" | "bundle"
 */

/**
 * Factory for PDF binary endpoints (btrz-api-notifications). Resolves URL by query.type (and query.family when type is "product").
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
function pdfFactory({
  client,
  internalAuthTokenProvider
}) {
  /**
   * GET a PDF by item id and type. Returns binary (blob) by default.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PdfGetQuery} [opts.query] - type (required for correct path); family when type is "product"
   * @param {string} opts.itemId - Item id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @param {string} [opts.responseType] - Axios responseType (default "blob")
   * @returns {Promise<import("axios").AxiosResponse<Blob|ArrayBuffer>>}
   */
  // eslint-disable-next-line max-statements
  function get({
    token,
    jwtToken,
    query = {},
    itemId,
    headers,
    responseType
  }) {
    let url = `/pdf-tickets/${itemId}`;
    if (query.type === "product") {
      switch (query.family) {
        case "ticket":
          url = `/pdf-tickets/${itemId}`;
          break;
        case "reservation":
          url = `/pdf-reservations/${itemId}`;
          break;
        case "paid in":
          url = `/pdf-paid-ins/${itemId}`;
          break;
        case "paid out":
          url = `/pdf-paid-outs/${itemId}`;
          break;
        case "parcel":
          url = `/pdf-parcels/${itemId}`;
          break;
        case "flexpass":
          url = `/pdf-flexpasses/${itemId}`;
          break;
        case "bundle":
          url = `/pdf-redeemable-items/${itemId}`;
          break;
        default:
          break;
      }
    }
    if (query.type === "giftCertificate") {
      url = `/pdf-gift-certificates/${itemId}`;
    }
    if (query.type === "voucher") {
      url = `/pdf-vouchers/${itemId}`;
    }
    if (query.type === "transaction") {
      url = `/pdf-transactions/${itemId}`;
    }
    if (query.type === "ssr") {
      url = `/pdf-ssrs/${itemId}`;
    }
    if (query.type === "manifest") {
      url = `/pdf-manifests/${itemId}`;
    }
    if (query.type === "passengersManifest") {
      url = `/pdf-passengers-manifests/${itemId}`;
    }
    if (query.type === "order") {
      url = `/pdf-orders/${itemId}`;
    }
    if (query.type === "shift") {
      url = `/pdf-shifts/${itemId}`;
    }
    if (query.type === "remainderSlip") {
      url = `/pdf-remainder-slip/${itemId}`;
    }
    if (query.type === "exchange") {
      url = `/pdf-exchanges/${itemId}`;
    }
    if (query.type === "invoice") {
      url = `/pdf-invoices/${itemId}`;
    }
    if (query.type === "locationClosure") {
      url = `/pdf-location-closures/${itemId}`;
    }
    if (query.type === "parcelManifest") {
      url = `/pdf-parcels-manifests/${itemId}`;
    }
    if (query.type === "startingBalance") {
      url = `/pdf-starting-balance/${itemId}`;
    }
    if (query.type === "partialShiftDeposits") {
      url = `/pdf-partial-shift-deposits-id/${itemId}`;
    }
    if (query.type === "shiftLocationClosure") {
      url = `/pdf-shift-location-closures/${itemId}`;
    }
    if (query.type === "bankDepositSlip") {
      url = `/pdf-bank-deposit-slips/${itemId}`;
    }
    if (query.type === "terminalVoucher") {
      url = `/pdf-terminal-voucher/${itemId}`;
    }
    if (query.type === "manualTickets") {
      url = `/pdf-manual-tickets/${itemId}`;
    }

    return client.get(url, {
      params: query,
      responseType: responseType || "blob",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  return {
    get
  };
}

module.exports = pdfFactory;
