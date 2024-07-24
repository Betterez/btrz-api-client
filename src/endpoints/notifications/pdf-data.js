const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function pdfDataFactory({
  client,
  internalAuthTokenProvider
}) {
  // eslint-disable-next-line max-statements
  function get({
    token,
    jwtToken,
    query = {},
    itemId,
    headers
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
    if (query.type === "passengersManifest") {
      url = `/pdf-passengers-manifests/${itemId}`;
    }
    if (query.type === "manifest") {
      url = `/pdf-manifests/${itemId}`;
    }
    if (query.type === "order") {
      url = `/pdf-orders/${itemId}`;
    }
    if (query.type === "shift") {
      url = `/pdf-shifts/${itemId}`;
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
      url = `/pdf-partial-shift-deposits/${itemId}`;
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

    return client.get(url, {
      params: query,
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

module.exports = pdfDataFactory;
