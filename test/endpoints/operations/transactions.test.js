/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */

const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

const expect = require("chai").expect;

describe("operations/transactions", function () {
  const token = "validToken";
  const jwtToken = "validJWTtoken";
  const internalAuthTokenProvider = {
    getToken: () => {
      return "internalToken";
    }
  };

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
      internalAuthTokenProvider,
      transactionId,
      jwtToken: "internal_auth_token"
    });
  });
});
