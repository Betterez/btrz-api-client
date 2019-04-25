/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */

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

describe.only("operations/transactions", function () {
  it("should return companion tickets for transaction", function () {
    const transactionId = "5cc1dbc87447799a3a1b93c7";

    return api.operations.transactions.companionTickets({token, jwtToken, trxId: transactionId})
      .then((res) => {
        console.log(res.data.tickets);
      });
  });
});
