const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('accounts/lexicons', function() {
  const token = 'I owe you a token';
  
  afterEach(function() {
    axiosMock.restore();
  })

  it("should list countries", function() {
    axiosMock.onGet(`/lexicons/lexicon_someLexicon`).reply((req) => {
      if(req.params.context !== "some context") {
        return [400];
      } else {
        return expectRequest({ statusCode: 200, token })(req);
      }
    });

    return api.accounts.lexicons.all({ token, context: "some context", lexiconName: "someLexicon" });
  });

});