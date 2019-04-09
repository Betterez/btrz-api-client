const {expect} = require("chai");
const port = process.env.ACCOUNTS_API_PORT;
const token = process.env.API_TOKEN;
const id = "5818b94537e32ee60c000005";

const api = require("./../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    accounts: (baseUrl) => `${baseUrl}/accounts`
  }
});

describe("accounts/user/{id}", () => {
  it("should return user", () => {
    return api.accounts.users.get({token, id})
      .then((res) => {
        expect(res.status).to.be.eql(200);
      });
  });
});
