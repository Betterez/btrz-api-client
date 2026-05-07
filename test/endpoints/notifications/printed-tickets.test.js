const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("notifications/printed-tickets", () => {
  const token = "my-api-key";
  const jwtToken = "my-token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should return the tickets to print", () => {
    const trxId = "transactionId1";
    axiosMock.onGet("/printed-tickets").reply(expectRequest({statusCode: 200, token}));
    return api.notifications.printedTickets.get({token, jwtToken, trxId});
  });

  it("should return the tickets to print with custom responseType", () => {
    const trxId = "transactionId1";
    const responseType = "blob";
    axiosMock.onGet("/printed-tickets").reply(expectRequest({statusCode: 200, token}));
    return api.notifications.printedTickets.get({token, jwtToken, trxId, responseType});
  });
});
