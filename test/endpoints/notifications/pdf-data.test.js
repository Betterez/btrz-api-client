const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({
  baseURL: "http://test.com"
});

describe("notifications/pdf-data", () => {
  const token = "my-api-key";
  const jwtToken = "my-jwt";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should return the proper data for a ticket", () => {
    const itemId = "12345";
    const query = {
      family: "ticket"
    }
    axiosMock.onGet(`/pdf-tickets/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId});
  });

  it("should return the proper data for a reservation", () => {
    const itemId = "12345";
    const query = {
      family: "reservation"
    }
    axiosMock.onGet(`/pdf-reservations/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId});
  });

  it("should return the proper data for a transaction", () => {
    const itemId = "12345";
    const query = {
      family: "transaction"
    }
    axiosMock.onGet(`/pdf-transactions/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId});
  });

  it("should return the proper data for a paid in", () => {
    const itemId = "12345";
    const query = {
      family: "paid in"
    }
    axiosMock.onGet(`/pdf-paid-ins/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId});
  });

  it("should return the proper data for a parcel", () => {
    const itemId = "12345";
    const query = {
      family: "parcel"
    }
    axiosMock.onGet(`/pdf-parcels/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId});
  });

  it("should return the proper data for a flexpass", () => {
    const itemId = "12345";
    const query = {
      family: "flexpass"
    }
    axiosMock.onGet(`/pdf-flexpasses/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId});
  });


  it("should return the proper data for a redeemableItem", () => {
    const itemId = "12345";
    const query = {
      family: "bundle"
    }
    axiosMock.onGet(`/pdf-redeemable-items/${itemId}`)
      .reply(expectRequest({
        statusCode: 200, token
      }));
    return api.notifications.pdfData.get({
      token, query, itemId});
  });
});
