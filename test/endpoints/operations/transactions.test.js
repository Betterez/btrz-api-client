/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */

describe("operations/transactions", function () {
  const {axiosMock, expectRequest} = require("./../../test-helpers.js");
  const internalAuthTokenProvider = {
    getToken: () => {
      return "internalToken";
    }
  };
  const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com", internalAuthTokenProvider});
  const expect = require("chai").expect;
  const token = "validToken";
  const jwtToken = "validJWTtoken";

  afterEach(function () {
    axiosMock.reset();
  });

  it("should get a transaction by id", function () {
    const transactionId = "transactionId1";
    axiosMock.onGet(`/transactions/${transactionId}`).reply(expectRequest({statusCode: 200, token}));
    return api.operations.transactions.get({jwtToken, token, trxId: transactionId})
      .then((response) => {
        expect(response.status).to.equals(200);
      });
  });

  it("should get a transaction by id with a given providerId", function () {
    const transactionId = "transactionId1";
    axiosMock.onGet(`/transactions/${transactionId}`, {
      params: {
        providerId: "123"
      }
    }).reply(expectRequest({
      statusCode: 200, token
    }));
    return api.operations.transactions.get({
      jwtToken,
      token,
      trxId: transactionId,
      query: {
        providerId: "123"
      }
    })
      .then((response) => {
        expect(response.status).to.equals(200);
      });
  });

  it("should get all transactions that match the query", function () {
    const transactionId = "transactionId1";
    axiosMock.onGet("/transactions").reply(expectRequest({statusCode: 200, token}));
    return api.operations.transactions.all({jwtToken, token, trxId: transactionId})
      .then((response) => {
        expect(response.status).to.equals(200);
      });
  });

  it("should get a all tickets of a transaction by id", function () {
    const transactionId = "transactionId1";
    axiosMock.onGet(`/transactions/${transactionId}/tickets`).reply(expectRequest({statusCode: 200, token}));
    return api.operations.transactions.getTickets({jwtToken, token, trxId: transactionId})
      .then((response) => {
        expect(response.status).to.equals(200);
      });
  });

  it("should get an array of applied insurance on a given transaction", function () {
    const transactionId = "transactionId2";
    axiosMock.onGet(`/transactions/${transactionId}/applied-insurance`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.transactions.appliedInsurance({jwtToken, token, trxId: transactionId})
      .then((response) => {
        expect(response.status).to.equals(200);
      });
  });

  it("should get an array of tickets on a given transaction", function () {
    const transactionId = "transactionId2";
    const ticketIds = ["someTicket", "someTicket2"];
    axiosMock.onGet(`/transactions/${transactionId}/companion-tickets`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.transactions.companionTickets({jwtToken, token, transactionId, ticketIds})
      .then((response) => {
        expect(response.status).to.equals(200);
      });
  });

  it("should return an object with arrays of cancellable items on a given transaction", function () {
    const transactionId = "transactionId2";
    axiosMock.onGet(`/transactions/${transactionId}/cancellable-items`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.transactions.cancellableItems({jwtToken, token, transactionId})
      .then((response) => {
        expect(response.status).to.equals(200);
      });
  });


  it("should update transaction payments", function () {
    const transactionId = "transactionId2";
    const paymentResult = {};
    axiosMock.onPut(`/transactions/${transactionId}/payments`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.transactions.payments.update({
      jwtToken, token, trxId: transactionId, paymentResult
    })
      .then((response) => {
        expect(response.status).to.equals(200);
      });
  });

  it("should expire all", () => {
    const transactionId = "transactionX";
    axiosMock.onPatch("/transactions/status").reply(expectRequest({
      statusCode: 200,
      internalAuthTokenProvider,
      withoutApiKey: true,
      jwtToken: "internal_auth_token"
    }));
    return api.operations.transactions.expireAll({
      transactionId,
      jwtToken: "internal_auth_token"
    });
  });


  it("should add transaction invoice informations", function () {
    const transactionId = "transactionId2";
    const invoice = {
      invoiceId: "invoice-1",
      externalInvoiceId: "external-invoice-1"
    };
    axiosMock.onPost(`/transactions/${transactionId}/invoices`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.transactions.invoices.create({
      jwtToken, token, transactionId, invoice
    })
      .then((response) => {
        expect(response.status).to.equals(200);
      });
  });

  it("should add transaction credit note informations", function () {
    const transactionId = "transactionId2";
    const creditNote = {
      creditNoteId: "credit-note-1",
      externalCreditNoteId: "external-credit-note-1"
    };
    axiosMock.onPost(`/transactions/${transactionId}/credit-notes`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.transactions.creditNotes.create({
      jwtToken, token, transactionId, creditNote
    })
      .then((response) => {
        expect(response.status).to.equals(200);
      });
  });
});
