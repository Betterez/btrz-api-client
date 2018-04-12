const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('accounts/lexicons', function() {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';
  
  afterEach(function() {
    axiosMock.restore();
  })

  it("should list countries", function() {
    axiosMock.onGet(`/lexicons/buscompany`).reply((req) => {
      if(req.params.context !== "some context" || req.params.someOtherParam !== 1) {
        return [400];
      } else {
        return expectRequest({ statusCode: 200, token })(req);
      }
    });

    return api.accounts.lexicons.all({ token, context: "some context", query: {someOtherParam: 1} });
  });

  it("should create lexicon entries", function() {
    axiosMock.onPost("/lexicons").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.accounts.lexicons.create({ token, jwtToken, lexiconEntries: [{
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

});
