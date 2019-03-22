const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/routes/shedules', function () {
  const token = 'I owe you a token';

  afterEach(function() {
    axiosMock.reset();
  });

  it("should get schedules", function() {
    axiosMock.onGet(`/routes/schedules`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.schedules.all({token }, {});
  });
});
