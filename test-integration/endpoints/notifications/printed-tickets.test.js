const port = process.env.NOTIFICATIONS_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    notifications: (baseUrl) => `${baseUrl}/notifications`
  }
});

describe("notifications/printed-tickets", () => {
  it("should get the tickets to print", () => {
    const trxId = "5aa13f1dc5faab681f7d4ef3";
    return api.notifications.printedTickets.get({token, jwtToken, trxId});
  });

  it("should get the tickets to print with type responseType 'blob'", () => {
    const trxId = "5aa13f1dc5faab681f7d4ef3";
    const responseType = "blob";
    return api.notifications.printedTickets.get({token, jwtToken, trxId, responseType});
  });
});
