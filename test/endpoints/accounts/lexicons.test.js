const {
  axiosMock, expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
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

  it("should get lexicons by text (search global lexicons)", () => {
    axiosMock.onGet("/lexicons/en-us/content").reply((req) => {
      if (req.params.txt !== "welcome") {
        return [400];
      }
      return expectRequest({
        statusCode: 200,
        token,
        jwtToken
      })(req);
    });
    return api.accounts.lexicons.getByText({
      token,
      jwtToken,
      lang: "en-us",
      txt: "welcome"
    });
  });

  describe("suggestions", () => {
    it("should list lexicon suggestions", () => {
      axiosMock.onGet("/lexicons/suggestions").reply(expectRequest({
        statusCode: 200,
        token,
        query: {status: "for review"}
      }));
      return api.accounts.lexicons.suggestions.list({
        token,
        params: {status: "for review"}
      });
    });

    it("should list lexicon suggestions with super user params", () => {
      axiosMock.onGet("/lexicons/suggestions").reply(expectRequest({
        statusCode: 200,
        token,
        query: {superUserId: "abc123", superUserHash: "hash456"}
      }));
      return api.accounts.lexicons.suggestions.list({
        token,
        jwtToken,
        params: {superUserId: "abc123", superUserHash: "hash456"}
      });
    });

    it("should get lexicon suggestion by id", () => {
      const suggestionId = "507f1f77bcf86cd799439011";
      axiosMock.onGet(`/lexicons/suggestions/${suggestionId}`).reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
      return api.accounts.lexicons.suggestions.getById({
        token,
        jwtToken,
        suggestionId
      });
    });

    it("should update lexicon suggestion (super user)", () => {
      const suggestionId = "507f1f77bcf86cd799439011";
      axiosMock.onPut(`/lexicons/suggestions/${suggestionId}`).reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken,
        body: {status: "accepted"},
        query: {superUserId: "super1", superUserHash: "hash1"}
      }));
      return api.accounts.lexicons.suggestions.update({
        token,
        jwtToken,
        suggestionId,
        data: {status: "accepted"},
        superUserId: "super1",
        superUserHash: "hash1"
      });
    });
  });
});
