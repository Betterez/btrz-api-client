const assert = require("node:assert/strict");

const port = process.env.OPERATIONS_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    operations: (baseUrl) => { return `${baseUrl}/operations`; }
  }
});

describe("operations/appliedInsurances", () => {
  it("empty array for unexistent transaction", () => {
    const trxId = "NOT_EXISTING_TRX";
    return api.operations.appliedInsurance.all({token, jwtToken, trxId})
      .then((res) => {
        assert.strictEqual(res.data.appliedInsurances.length, 0);
      });
  });
});
