describe("accounts/docs", () => {
  const assert = require("node:assert/strict");
  const port = process.env.ACCOUNTS_API_PORT;

  const api = require("./../../../src/client.js").createApiClient({
    baseURL: `http://localhost:${port}`,
    baseURLOverride: {
      accounts: (baseUrl) => { return `${baseUrl}/accounts`; }
    }
  });
  it("should get the docs", () => {
    return api.accounts.docs.get({})
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        console.log(data);
        assert.ok(data);
      });
  });
});
