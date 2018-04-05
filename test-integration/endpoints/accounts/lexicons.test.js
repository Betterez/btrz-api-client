const {expect} = require("chai");

const port = process.env.ACCOUNTS_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const accountId = process.env.ACCOUNT_ID;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    accounts: (baseUrl) => `${baseUrl}/accounts`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe("accounts/lexicons", function() {

  it("should list lexicons", function() {
    return api.accounts.lexicons.all({ token, context: "vue" })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200))
  });

  it("should create lexicon entries", function() {
    return api.accounts.lexicons.create({ token, jwtToken, lexiconEntries: [{
          accountId,
          name: "test-lexicon-entry-1",
          contexts: ["app", "websales", "vue"],
          translations: {
            "en-us": "Test lexicon entry",
            "fr-fr": "Test lexicon entry french"
          }
        }]
      })
      .then(({status, data}) => {
        expect(status).to.equal(200);
        expect(data.successes).to.have.length(1);
        expect(data.failures).to.have.length(0);
      });
  });

});