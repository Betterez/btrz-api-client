const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("operations/tickets", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should patch a ticket", () => {
    const ticketId = "myTicket";
    const op1 = {op: "move", routeId: "someRoute", schedule: "someSchedule", date: "2018-01-01"};
    const warningsEnabled = false;
    axiosMock.onPatch(`/tickets/${ticketId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.tickets.patch({token, jwtToken, id: ticketId, operations: [op1], warningsEnabled});
  });

  it("should get a ticket", () => {
    const ticketId = "myTicket";
    axiosMock.onGet(`/tickets/${ticketId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.tickets.get({token, jwtToken, id: ticketId});
  });
});
