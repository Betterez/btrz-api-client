const port = process.env.ACCOUNTS_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    accounts: (baseUrl) => `${baseUrl}/accounts`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe("accounts/countries", function() {

  it("should list lexicons", function() {
    return api.accounts.lexicons.all({ token, context: "vue" })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200))
  });

});