/* eslint-disable func-names */
/* eslint-disable arrow-parens */
/* eslint-disable prefer-arrow-callback */

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

describe("operations/transactions", function () {
  describe("companion", function () {
    it("should return companion tickets for transaction", function () {
      const ticketIds = ["5cd1c7fcc290ab8c21d227d1", "5cd1c7fcc290ab8c21d227cf", "5cd1c7fcc290ab8c21d227cd"];
      const transactionId = "5cd1c7fbc290ab8c21d227cb";

      return api.operations.transactions.companionTickets({token, jwtToken, ticketIds, transactionId})
        .then((res) => {
          console.log(res.data.tickets);
        });
    });
  });
});
