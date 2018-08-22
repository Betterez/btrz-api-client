const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('operations/tickets', function() {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(function() {
    axiosMock.reset();
  });

  it("should patch a ticket", function() {
    const ticketId = "myTicket",
      op1 = {op: "move", routeId: "someRoute", schedule: "someSchedule", date: "2018-01-01"},
      warningsEnabled = false;
    axiosMock.onPatch(`/tickets/${ticketId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.operations.tickets.patch({ token, jwtToken, id: ticketId, operations: [op1], warningsEnabled });
  });

});
