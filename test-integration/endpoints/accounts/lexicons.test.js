const assert = require("node:assert/strict");
const {randomUUID} = require("node:crypto");

const port = process.env.ACCOUNTS_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const accountId = process.env.ACCOUNT_ID;
const existingLexiconKey = process.env.EXISTING_LEXICON_KEY;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    accounts: (baseUrl) => { return `${baseUrl}/accounts`; }
  }
});

const {matchHeaders, statusCode} = require("./../../test-integration-helpers.js");

describe("accounts/lexicons", () => {
  it("should list lexicons", () => {
    return api.accounts.lexicons.all({token, context: "vue"})
      .then(matchHeaders("x-api-key"))
      .then(statusCode(200));
  });

  it("should create lexicon entries", () => {
    return api.accounts.lexicons.create({
      token,
      jwtToken,
      lexiconEntries: [{
        accountId,
        name: "test-lexicon-entry-1",
        context: ["app", "websales", "vue"],
        values: {
          "en-us": "Test lexicon entry",
          "fr-fr": "Test lexicon entry french"
        }
      }]
    })
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        assert.strictEqual(data.successes.length, 1);
        assert.strictEqual(data.failures.length, 0);
      });
  });

  it("should update lexicon entries", () => {
    const newTranslation = randomUUID();

    return api.accounts.lexicons.updateMany({
      token,
      jwtToken,
      updates: [{
        accountId,
        key: existingLexiconKey,
        values: {
          "en-us": newTranslation
        }
      }]
    })
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        assert.strictEqual(data.entries.length, 1);
        assert.deepStrictEqual(data.entries[0].values["en-us"], newTranslation);
      });
  });
});
