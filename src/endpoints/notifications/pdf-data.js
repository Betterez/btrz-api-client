const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

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

    if (query.type === "parcel_confirmation") {
      url = `/pdf-parcels/${itemId}`;
    }
    if (query.type === "redeemable_items_confirmation") {
      url = `/pdf-redeemable-items/${itemId}`;
    }
    if (query.type === "sold_item_confirmation") {
      url = `/pdf-sold-items/${itemId}`;
    }
    if (query.type === "customer_card_membership" ||
      query.type === "scanning_badge" ||
      query.type === "customer_activation" ||
      query.type === "customer_activation_mobile" ||
      query.type === "customer_password_reset" ||
      query.type === "customer_password_reset_mobile") {
      url = `/pdf-customer/${itemId}`;
    }
    if (query.type === "giftCertificate" || query.type === "gift_certificate_notification") {
      url = `/pdf-gift-certificates/${itemId}`;
    }
    if (query.type === "user_password_reset") {
      url = `/pdf-users/${itemId}`;
    }
    if (query.type === "voucher" || query.type === "voucher_notification" || query.type === "compensation_voucher") {
      url = `/pdf-vouchers/${itemId}`;
    }
    if (query.type === "new_account" || query.type === "new_seller_account" || query.type === "interline_provider_invite") {
      url = `/pdf-accounts/${itemId}`;
    }
    if (query.type === "transaction" || query.type === "operator_purchase" || query.type === "operator_ssr") {
      url = `/pdf-transactions/${itemId}`;
    }
    if (query.type === "operator_manifest_capacity") {
      url = `/pdf-operator-manifest-capacities/${itemId}`;
    }
    if (query.type === "ssr") {
      url = `/pdf-ssrs/${itemId}`;
    }
    if (query.type === "passengersManifest") {
      url = `/pdf-passengers-manifests/${itemId}`;
    }
    if (query.type === "reaccomodation" || query.type === "ticket_movement") {
      url = `/pdf-reaccomodation/${itemId}`;
    }
    if (query.type === "manifest" || query.type === "manifest_notification") {
      url = `/pdf-manifests/${itemId}`;
    }
    const orderTypes = ["order", "order_confirmation", "cancellation", "change"];
    if (orderTypes.includes(query.type)) {
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
    if (query.type === "manualTickets") {
      url = `/pdf-manual-tickets/${itemId}`;
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
