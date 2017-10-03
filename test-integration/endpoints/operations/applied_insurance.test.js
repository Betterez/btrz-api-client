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

describe("operations/appliedInsurances", function() {

  it("empty array for unexistent transaction", function() {
    const trxId = "NOT_EXISTING_TRX";
    return api.operations.appliedInsurance.all({ token, jwtToken, trxId })
      .then((res) => {
        expect(res.data.appliedInsurances).to.have.lengthOf(0);
      })
  });

});
