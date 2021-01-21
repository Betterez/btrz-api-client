const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("accounts/application-settings/:providerId", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the settings", () => {
    const providerId = "provider123";
    const query = {name: "theNameOfTheApp"};

    axiosMock.onGet(`/application-settings/${providerId}`, {params: query})
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.applicationSettings.get({token, providerId, query});
  });
});
