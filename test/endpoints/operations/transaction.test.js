const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });
const expect = require("chai").expect;

describe('operations/transaction', function() {
  const token = 'I owe you a token';
  const jwtToken = 'I owe you a JWT token'
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should get a transaction by id", function() {
    const transactionId = "transactionId1",
      providerId = "providerId";
    axiosMock.onGet(`/transaction/${transactionId}?providerId=${providerId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.operations.transaction.get({ token, id: transactionId, providerId });
  });

}); 