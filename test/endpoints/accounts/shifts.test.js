const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('accounts/shift/user', function() {
  const token = 'I owe you a token';
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should get shift", function() {
    const userId = "userId1"
    axiosMock.onGet(`/shift/user/${userId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.accounts.shifts.get({ token, userId });
  });

});