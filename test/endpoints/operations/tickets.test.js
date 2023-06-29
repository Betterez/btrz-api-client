/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */

const {expect} = require("chai");
const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

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

  it("should get an array of tickets on a given transaction", function () {
    const ticketId = "ticketId2";
    axiosMock.onGet(`/tickets/${ticketId}/companion-tickets`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.tickets.companionTickets({jwtToken, token, ticketId})
      .then((response) => {
        expect(response.status).to.equals(200);
      });
  });

  it("should get all ticket for the given document ID", () => {
    const lookupSearchParams = "documentTypeId|DNI,documentNumber|33454787";
    axiosMock.onGet("/tickets").reply(expectRequest({statusCode: 200, token}));
    return api.operations.tickets.all({token, query: {lookupSearchParams}});
  });
});
