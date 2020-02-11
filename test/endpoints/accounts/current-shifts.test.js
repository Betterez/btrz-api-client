const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("accounts/users/:userId/current-shift", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get current-shift", () => {
    const userId = "userId1";
    const query = {includeActivity: false};

    axiosMock.onGet(`/users/${userId}/current-shift`, {params: query})
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.currentShifts.get({token, userId, query});
  });
});
