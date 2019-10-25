const { axiosMock, expectRequest } = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('coltrane/paths', function() {
  const token = 'I owe you a token';

  afterEach(function() {
    axiosMock.reset();
  });

  it("should list paths", function() {
    axiosMock.onGet(`/paths`).reply(expectRequest({ statusCode: 200, token }));
    return api.coltrane.paths.all({ token });
  });
});
