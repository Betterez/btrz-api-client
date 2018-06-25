const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/fares', function() {
  const token = 'I owe you a token';

  afterEach(function() {
    axiosMock.reset();
  });

  it("should list fares", function() {
    axiosMock.onGet(`/fares`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.fares.all({ token });
  });

  it("should get a fare by id", function() {
    const id = "fareId1";
    axiosMock.onGet(`/fare/${id}`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.fares.get({ token, id });
  });

});
