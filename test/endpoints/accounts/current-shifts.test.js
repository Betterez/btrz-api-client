const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('accounts/users/:userId/current-shift', function() {
  const token = 'I owe you a token';
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should get current-shift", function() {
    const userId = "userId1";
    axiosMock.onGet(`/users/${userId}/current-shift`).reply(expectRequest({ statusCode: 200, token }));
    return api.accounts.currentShifts.get({ token, userId });
  });

});