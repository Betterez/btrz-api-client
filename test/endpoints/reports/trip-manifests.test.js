const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("reports/trip-manifests", () => {
  const token = "token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all the trip manifests", () => {
    axiosMock.onGet("/trip-manifests").reply(expectRequest({statusCode: 200, token}));
    return api.reports.tripManifests.all({token, query: {}});
  });
});
