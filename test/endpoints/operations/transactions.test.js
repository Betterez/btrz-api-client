const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

const expect = require("chai").expect;

describe('operations/transactions', function() {
  const token = 'validToken',
    jwtToken = 'validJWTtoken';

  afterEach(function() {
    axiosMock.reset();
  });

  it("should get a transaction by id", function() {
    const transactionId = "transactionId1";
    axiosMock.onGet(`/transactions/${transactionId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.operations.transactions.get({ jwtToken, token, trxId: transactionId })
      .then((response) => {
        expect(response.status).to.equals(200);
      });
  });

  it("should get an array of applied insurance on a given transaction", function() {
    const transactionId = "transactionId2";
    axiosMock.onGet(`/transactions/${transactionId}/applied-insurance`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.operations.transactions.appliedInsurance({ jwtToken, token, trxId: transactionId })
      .then((response) => {
        expect(response.status).to.equals(200);
      });

  });
});