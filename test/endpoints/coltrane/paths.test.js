const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("coltrane/paths", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list paths", () => {
    axiosMock.onGet("/paths").reply(expectRequest({statusCode: 200, token}));
    return api.coltrane.paths.all({token});
  });
});
