const port = process.env.ACCOUNTS_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    accounts: (baseUrl) => `${baseUrl}/accounts`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe("accounts/shift/user", () => {

  it.skip("should get the shift of the user specified", () => {
    const userId = "5818b94537e32ee60c000005";
    return api.accounts.shifts.get({ token, userId });
  });

});