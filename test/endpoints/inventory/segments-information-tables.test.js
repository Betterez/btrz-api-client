const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("inventory/segments-information-tables", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get trip by id", () => {
    const query = {providerId: 3};
    axiosMock.onGet("/segments-information-tables/2").reply(expectRequest({statusCode: 200, token, query}));
    return api.inventory.segmentsInformationTables.get({token, routeId: 2, query});
  });
});
