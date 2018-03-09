const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('notifications/printed-tickets', function() {
  const token = "my-api-key",
    jwtToken = "my-token";
  
  afterEach(function() {
    axiosMock.reset();
  })

  it("should return the tickets to print", function() {
    const trxId = "transactionId1";
    axiosMock.onGet(`/printed-tickets`).reply(expectRequest({ statusCode: 200, token }));
    return api.notifications.printedTickets.get({ token, jwtToken, trxId });
  });

  it("should return the tickets to print with custom responseType", function() {
    const trxId = "transactionId1",
      responseType = "blob";
    axiosMock.onGet(`/printed-tickets`).reply(expectRequest({ statusCode: 200, token }));
    return api.notifications.printedTickets.get({ token, jwtToken, trxId, responseType });
  });

});