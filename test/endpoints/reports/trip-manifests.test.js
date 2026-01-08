const { axiosMock, expectRequest } = require("./../../test-helpers"),
  api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("reports/trip-manifests", () => {
  const token = "token",
    jwtToken = "jwtToken";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all the trip manifests", function() {
    axiosMock.onGet("/trip-manifests").reply(expectRequest({ statusCode: 200, token }));
    return api.reports.tripManifests.all({token, query: {}});
  });
});
