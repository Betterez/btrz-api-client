const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});
const id = "1234321";

describe("accounts/user/{id}", () => {
  const token = "someToken";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should return user", () => {
    axiosMock.onGet(`/user/${id}`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.users.get({token, id});
  });
});
