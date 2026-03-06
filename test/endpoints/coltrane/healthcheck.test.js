const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("coltrane/healthcheck", () => {
  afterEach(() => {
    axiosMock.reset();
  });

  it("should get healthcheck (liveness)", () => {
    axiosMock.onGet("/healthcheck").reply(expectRequest({statusCode: 200, withoutApiKey: true}));
    return api.coltrane.healthcheck.get();
  });
});
