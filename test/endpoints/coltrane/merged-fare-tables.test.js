const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("coltrane/merged-fare-tables", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get merged fare tables", () => {
    const routeId = "507f1f77bcf86cd799439011";
    const productId = "507f1f77bcf86cd799439012";
    axiosMock.onGet(`/routes/${routeId}/merged-fare-tables/${productId}`).reply(expectRequest({statusCode: 200, token}));
    return api.coltrane.mergedFareTables.get({token, routeId, productId});
  });
});
