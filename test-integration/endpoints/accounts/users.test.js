const assert = require("node:assert/strict");
const port = process.env.ACCOUNTS_API_PORT;
const token = process.env.API_TOKEN;
const id = "5818b94537e32ee60c000005";

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    accounts: (baseUrl) => { return `${baseUrl}/accounts`; }
  }
});

describe("accounts/user/{id}", () => {
  it("should return user", () => {
    return api.accounts.users.get({token, id})
      .then((res) => {
        assert.deepStrictEqual(res.status, 200);
      });
  });
});
