/* eslint-disable func-names */
/* eslint-disable arrow-parens */
/* eslint-disable prefer-arrow-callback */

const {expect} = require("chai");

const port = process.env.OPERATIONS_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    operations: (baseUrl) => {
      return `${baseUrl}/operations`;
    }
  }
});

describe("operations/tickets", function () {
  describe("companion", function () {
    it("should return companion tickets for transaction", function () {
      const ticketId = "5cc8414fcbce0b1503fa7528";

      return api.operations.tickets.companionTickets({token, jwtToken, ticketId})
        .then((res) => {
          console.log(res.data.tickets);
        });
    });
  });

  describe("PATCH", function () {
    it("should patch a ticket with a move operation", function () {
      const id = "5b71c92bc8f175e94d5597a5";
      const op1 = {
        op: "move",
        routeId: "59e61395a67e2d1d17000040",
        schedule: "51150ecd-a8d7-4a4e-a2ac-21c16c627c63",
        date: "2018-08-15"
      };

      const warningsEnabled = false;

      return api.operations.tickets.patch({token, jwtToken, id, operations: [op1], warningsEnabled})
        .then((res) => {
          expect(res.data.results).to.have.length(1);
          expect(res.data.results[0].op).to.be.eql("move");
          expect(res.data.results[0].status).to.be.eql("success");
        });
    });

    it("should return not found", function () {
      const id = "5b71c961c8f175e94d5597a9";
      const op1 = {
        op: "move",
        routeId: "59e61395a67e2d1d17000040",
        schedule: "51150ecd-a8d7-4a4e-a2ac-21c16c627c63",
        date: "2018-08-15"
      };
      const warningsEnabled = false;

      return api.operations.tickets.patch({token, jwtToken, id, operations: [op1], warningsEnabled})
        .catch((err) => {
          /* eslint-disable-next-line no-unused-expressions */
          expect(err).to.exist;
          expect(err.response.status).to.be.eql(404);
          expect(err.response.data.results).to.have.length(1);
          expect(err.response.data.results[0].op).to.be.eql("move");
          expect(err.response.data.results[0].status).to.be.eql("error");
          expect(err.response.data.results[0].error.code).to.be.eql("TICKET_NOT_FOUND");
        });
    });
  });
});
