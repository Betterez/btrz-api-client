const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("coltrane/info", () => {
  afterEach(() => {
    axiosMock.reset();
  });

  it("should get Coltrane service info (status and dependencies)", () => {
    axiosMock.onGet("/info").reply(expectRequest({statusCode: 200, withoutApiKey: true}));
    return api.coltrane.info.get();
  });
});
