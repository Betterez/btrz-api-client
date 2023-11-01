const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("notifications/pdfs", () => {
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
    return api.notifications.pdfs.get({token, query, itemId});
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
    return api.notifications.pdfs.get({token, query, itemId});
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
    return api.notifications.pdfs.get({token, query, itemId});
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
    return api.notifications.pdfs.get({token, query, itemId});
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
    return api.notifications.pdfs.get({token, query, itemId});
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
    return api.notifications.pdfs.get({token, query, itemId});
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
    return api.notifications.pdfs.get({token, query, itemId});
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
    return api.notifications.pdfs.get({token, query, itemId});
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
    return api.notifications.pdfs.get({token, query, itemId});
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
    return api.notifications.pdfs.get({token, query, itemId});
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
    return api.notifications.pdfs.get({token, query, itemId});
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
    return api.notifications.pdfs.get({token, query, itemId});
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
    return api.notifications.pdfs.get({token, query, itemId});
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
    return api.notifications.pdfs.get({
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
    return api.notifications.pdfs.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a vouchers", () => {
    const itemId = "12345";
    const query = {
      type: "voucher"
    };
    axiosMock.onGet(`/pdf-vouchers/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfs.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a passengerManifest", () => {
    const itemId = "12345";
    const query = {
      type: "passengersManifest"
    };
    axiosMock.onGet(`/pdf-passengers-manifests/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfs.get({
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
    return api.notifications.pdfs.get({
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

  it("should return the proper data for a startingBalance", () => {
    const itemId = "12345";
    const query = {
      type: "startingBalance"
    };
    axiosMock.onGet(`/pdf-starting-balance/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });

  it("should return the proper data for a partialShiftDeposits", () => {
    const itemId = "12345";
    const query = {
      type: "partialShiftDeposits"
    };
    axiosMock.onGet(`/pdf-partial-shift-deposits/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId
    });
  });
});
