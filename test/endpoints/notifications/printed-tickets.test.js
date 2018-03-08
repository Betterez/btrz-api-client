const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('notifications/printed-tickets', function() {
  const token = 'I owe you a token';
  
  afterEach(function() {
    axiosMock.reset();
  })

  it("should return the tickets to print", function() {
    const trxId = "transactionId1";
    axiosMock.onGet(`/printed-tickets`).reply(expectRequest({ statusCode: 200, token }));
    return api.notifications.printedTickets.get({ token, trxId });
  });

});