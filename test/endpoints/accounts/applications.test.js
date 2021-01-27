const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("accounts/applications/:id", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the application", () => {
    const id = "appId";

    axiosMock.onGet(`/applications/${id}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.applications.get({token, jwtToken, id});
  });
});
