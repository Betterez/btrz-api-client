const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

// eslint-disable-next-line max-statements
describe("notifications/pdf-data", () => {
  const token = "my-api-key";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should return the proper data for a ticket", () => {
    const itemId = "12345";
    const query = {
      type: "product",
      family: "ticket"
    };
    axiosMock.onGet(`/pdf-tickets/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a reservation", () => {
    const itemId = "12345";
    const query = {
      type: "product",
      family: "reservation"
    };
    axiosMock.onGet(`/pdf-reservations/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a shift", () => {
    const itemId = "12345";
    const query = {
      type: "shift"
    };
    axiosMock.onGet(`/pdf-shifts/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a manifest", () => {
    const itemId = "12345";
    const query = {
      type: "manifest"
    };
    axiosMock.onGet(`/pdf-manifests/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for an order", () => {
    const itemId = "12345";
    const query = {
      type: "order"
    };
    axiosMock.onGet(`/pdf-orders/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for order_confirmation (email template type)", () => {
    const itemId = "12345";
    const query = {
      type: "order_confirmation"
    };
    axiosMock.onGet(`/pdf-orders/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for cancellation (email template type)", () => {
    const itemId = "12345";
    const query = {
      type: "cancellation"
    };
    axiosMock.onGet(`/pdf-orders/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for change (email template type)", () => {
    const itemId = "12345";
    const query = {
      type: "change"
    };
    axiosMock.onGet(`/pdf-orders/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a remainder slip", () => {
    const itemId = "12345";
    const query = {
      type: "remainderSlip"
    };
    axiosMock.onGet(`/pdf-remainder-slip/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a ssr", () => {
    const itemId = "12345";
    const query = {
      type: "ssr"
    };
    axiosMock.onGet(`/pdf-ssrs/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a exchange", () => {
    const itemId = "12345";
    const query = {
      type: "exchange"
    };
    axiosMock.onGet(`/pdf-exchanges/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a invoice", () => {
    const itemId = "12345";
    const query = {
      type: "invoice"
    };
    axiosMock.onGet(`/pdf-invoices/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a transaction", () => {
    const itemId = "12345";
    const query = {
      type: "transaction"
    };
    axiosMock.onGet(`/pdf-transactions/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a paid in", () => {
    const itemId = "12345";
    const query = {
      type: "product",
      family: "paid in"
    };
    axiosMock.onGet(`/pdf-paid-ins/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a paid out", () => {
    const itemId = "12345";
    const query = {
      type: "product",
      family: "paid out"
    };
    axiosMock.onGet(`/pdf-paid-outs/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a parcel", () => {
    const itemId = "12345";
    const query = {
      type: "product",
      family: "parcel"
    };
    axiosMock.onGet(`/pdf-parcels/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a flexpass", () => {
    const itemId = "12345";
    const query = {
      type: "product",
      family: "flexpass"
    };
    axiosMock.onGet(`/pdf-flexpasses/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });


  it("should return the proper data for a redeemableItem", () => {
    const itemId = "12345";
    const query = {
      type: "product",
      family: "bundle"
    };
    axiosMock.onGet(`/pdf-redeemable-items/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a gift-certificates", () => {
    const itemId = "12345";
    const query = {
      type: "giftCertificate"
    };
    axiosMock.onGet(`/pdf-gift-certificates/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a voucher", () => {
    const itemId = "12345";
    const query = {
      type: "voucher"
    };
    axiosMock.onGet(`/pdf-vouchers/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for pre_trip_notification (manifest notification data)", () => {
    const itemId = "12345";
    const query = {type: "pre_trip_notification"};
    axiosMock.onGet(new RegExp(`^/queue-notifications/manifest-notification-data/${itemId}`))
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for post_trip_notification (manifest notification data)", () => {
    const itemId = "12345";
    const query = {type: "post_trip_notification"};
    axiosMock.onGet(new RegExp(`^/queue-notifications/manifest-notification-data/${itemId}`))
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for parcel_confirmation", () => {
    const itemId = "12345";
    const query = {type: "parcel_confirmation"};
    axiosMock.onGet(`/pdf-parcels/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for redeemable_items_confirmation", () => {
    const itemId = "12345";
    const query = {type: "redeemable_items_confirmation"};
    axiosMock.onGet(`/pdf-redeemable-items/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for sold_item_confirmation", () => {
    const itemId = "12345";
    const query = {type: "sold_item_confirmation"};
    axiosMock.onGet(`/pdf-sold-items/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for customer_card_membership (pdf-customer)", () => {
    const itemId = "12345";
    const query = {type: "customer_card_membership"};
    axiosMock.onGet(`/pdf-customer/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for scanning_badge (pdf-customer)", () => {
    const itemId = "12345";
    const query = {type: "scanning_badge"};
    axiosMock.onGet(`/pdf-customer/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for customer_activation (pdf-customer)", () => {
    const itemId = "12345";
    const query = {type: "customer_activation"};
    axiosMock.onGet(`/pdf-customer/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for customer_activation_mobile (pdf-customer)", () => {
    const itemId = "12345";
    const query = {type: "customer_activation_mobile"};
    axiosMock.onGet(`/pdf-customer/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for customer_password_reset (pdf-customer)", () => {
    const itemId = "12345";
    const query = {type: "customer_password_reset"};
    axiosMock.onGet(`/pdf-customer/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for customer_password_reset_mobile (pdf-customer)", () => {
    const itemId = "12345";
    const query = {type: "customer_password_reset_mobile"};
    axiosMock.onGet(`/pdf-customer/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for gift_certificate_notification", () => {
    const itemId = "12345";
    const query = {type: "gift_certificate_notification"};
    axiosMock.onGet(`/pdf-gift-certificates/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for user_password_reset", () => {
    const itemId = "12345";
    const query = {type: "user_password_reset"};
    axiosMock.onGet(`/pdf-users/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for voucher_notification", () => {
    const itemId = "12345";
    const query = {type: "voucher_notification"};
    axiosMock.onGet(`/pdf-vouchers/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for compensation_voucher", () => {
    const itemId = "12345";
    const query = {type: "compensation_voucher"};
    axiosMock.onGet(`/pdf-vouchers/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for new_account (pdf-accounts)", () => {
    const itemId = "12345";
    const query = {type: "new_account"};
    axiosMock.onGet(`/pdf-accounts/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for new_seller_account (pdf-accounts)", () => {
    const itemId = "12345";
    const query = {type: "new_seller_account"};
    axiosMock.onGet(`/pdf-accounts/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for interline_provider_invite (pdf-accounts)", () => {
    const itemId = "12345";
    const query = {type: "interline_provider_invite"};
    axiosMock.onGet(`/pdf-accounts/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for operator_purchase (pdf-transactions)", () => {
    const itemId = "12345";
    const query = {type: "operator_purchase"};
    axiosMock.onGet(`/pdf-transactions/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for operator_ssr (pdf-transactions)", () => {
    const itemId = "12345";
    const query = {type: "operator_ssr"};
    axiosMock.onGet(`/pdf-transactions/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for operator_manifest_capacity", () => {
    const itemId = "12345";
    const query = {type: "operator_manifest_capacity"};
    axiosMock.onGet(`/pdf-operator-manifest-capacities/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for reaccomodation", () => {
    const itemId = "12345";
    const query = {type: "reaccomodation"};
    axiosMock.onGet(`/pdf-reaccomodation/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for ticket_movement (pdf-reaccomodation)", () => {
    const itemId = "12345";
    const query = {type: "ticket_movement"};
    axiosMock.onGet(`/pdf-reaccomodation/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for manifest_notification", () => {
    const itemId = "12345";
    const query = {type: "manifest_notification"};
    axiosMock.onGet(`/pdf-manifests/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for startingBalance", () => {
    const itemId = "12345";
    const query = {type: "startingBalance"};
    axiosMock.onGet(`/pdf-starting-balance/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for partialShiftDeposits", () => {
    const itemId = "12345";
    const query = {type: "partialShiftDeposits"};
    axiosMock.onGet(`/pdf-partial-shift-deposits/${itemId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.notifications.pdfData.get({token, query, itemId});
  });

  it("should return the proper data for a passengersManifest", () => {
    const itemId = "12345";
    const query = {
      type: "passengersManifest"
    };
    axiosMock.onGet(`/pdf-passengers-manifests/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a locationClosure", () => {
    const itemId = "12345";
    const query = {
      type: "locationClosure"
    };
    axiosMock.onGet(`/pdf-location-closures/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a parcelManifest", () => {
    const itemId = "12345";
    const query = {
      type: "parcelManifest"
    };
    axiosMock.onGet(`/pdf-parcels-manifests/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a shiftLocationClosure", () => {
    const itemId = "12345";
    const query = {
      type: "shiftLocationClosure"
    };
    axiosMock.onGet(`/pdf-shift-location-closures/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });
  it("should return the proper data for a bankDepositSlip", () => {
    const itemId = "12345";
    const query = {
      type: "bankDepositSlip"
    };
    axiosMock.onGet(`/pdf-bank-deposit-slips/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a terminalVoucher", () => {
    const itemId = "12345";
    const query = {
      type: "terminalVoucher"
    };
    axiosMock.onGet(`/pdf-terminal-voucher/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });
  it("should return the proper data for a manualTicket request", () => {
    const itemId = "12345";
    const query = {
      type: "manualTickets"
    };
    axiosMock.onGet(`/pdf-manual-tickets/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });
});
