describe.only("accounts/docs", () => {
  const { expect } = require("chai");
  const port = process.env.ACCOUNTS_API_PORT;

  const api = require("./../../../src/client").createApiClient({
    baseURL: `http://localhost:${port}`,
    baseURLOverride: {
      accounts: (baseUrl) => `${baseUrl}/accounts`
    }
  });
  it("should get the docs", () => {
    return api.accounts.docs.get({})
      .then(({ status, data }) => {
        expect(status).to.equal(200);
        console.log(data);
        expect(data).to.exist;
      });
  });
});
