const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("accounts/application-settings/:providerId", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the settings", () => {
    const providerId = "provider123";
    const query = {name: "theNameOfTheApp"};

    axiosMock.onGet(`/application-settings/${providerId}`, {params: query})
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.applicationSettings.get({token, jwtToken, providerId, query});
  });

  it("should update an existing application setting", () => {
    const application = {
      name: "A"
    };
    const id = "someId";

    axiosMock.onPut(`/application-settings/${id}`)
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.applicationSettings.update({token, jwtToken, id, application});
  });

  it("should remove an application setting", () => {
    const id = "someId";

    axiosMock.onDelete(`/application-settings/${id}`)
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.applicationSettings.remove({token, jwtToken, id});
  });

  it("should regenerate the application keys", () => {
    const id = "someId";

    axiosMock.onPost(`/application-settings/${id}/keys`)
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.applicationSettings.regenerateKeys({token, jwtToken, id});
  });
});
