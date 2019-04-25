const { expect } = require("chai");

const port = process.env.OPERATIONS_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    operations: (baseUrl) => `${baseUrl}/operations`
  }
});

describe("operations/transaction", function() {

  it("should not get a transaction that does not exist", function() {
    const transactionId = "5967e3da1b7dfb3047e5ac81",
        providerId = "5967e3da1b7dfb3047e5ac82";
    return api.operations.transaction.get({ token, jwtToken, id: transactionId, providerId })
      .catch((res) => {
        console.log(res);
      })
  });

});