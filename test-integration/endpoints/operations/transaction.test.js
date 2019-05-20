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

describe("operations/transaction", () => {
  it("should not get a transaction that does not exist", () => {
    const transactionId = "5967e3da1b7dfb3047e5ac81";
    const providerId = "5967e3da1b7dfb3047e5ac82";
    return api.operations.transaction.get({token, jwtToken, id: transactionId, providerId})
      .catch((res) => {
        console.log(res);
      });
  });
});
