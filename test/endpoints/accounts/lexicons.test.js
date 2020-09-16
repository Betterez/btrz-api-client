const {
  axiosMock, expectRequest
} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({
  baseURL: "http://test.com"
});

describe("accounts/lexicons", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should list lexicons", () => {
    axiosMock.onGet("/lexicons/buscompany").reply((req) => {
      if (req.params.context !== "some context" || req.params.someOtherParam !== 1) {
        return [400];
      }
      return expectRequest({
        statusCode: 200,
        token
      })(req);
    });

    return api.accounts.lexicons.all({
      token,
      context: "some context",
      query: {
        someOtherParam: 1
      }
    });
  });

  it("should create lexicon entries", () => {
    axiosMock.onPost("/lexicons").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.lexicons.create({
      token,
      jwtToken,
      lexiconEntries: [{
        accountId: "52f94137a8663b2704000009",
        name: "test-lexicon-entry-1",
        context: ["app", "websales", "vue"],
        values: {
          "en-us": "Test lexicon entry",
          "fr-fr": "Test lexicon entry french"
        }
      }]
    });
  });

  it("should create or update lexicon entries", () => {
    axiosMock.onPut("/lexicons").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.lexicons.createOrUpdateMany({
      token,
      jwtToken,
      entries: [{
        accountId: "52f94137a8663b2704000009",
        key: "test-lexicon-entry-1",
        context: ["app", "websales", "vue"],
        values: {
          "en-us": "Updated english phrase",
          "fr-fr": "Nouveau phrase en français"
        }
      }]
    });
  });

  it("should update lexicon entries", () => {
    axiosMock.onPatch("/lexicons").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.lexicons.updateMany({
      token,
      jwtToken,
      updates: [{
        accountId: "52f94137a8663b2704000009",
        name: "test-lexicon-entry-1",
        context: ["app", "websales", "vue"],
        values: {
          "en-us": "Updated english phrase",
          "fr-fr": "Nouveau phrase en français"
        }
      }]
    });
  });
});
