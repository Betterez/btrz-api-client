const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("sales/bundles", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list bundles", () => {
    const query = {
      providerId: "providerId1",
      type: "bundles"
    };
    axiosMock.onGet("/bundles").reply(expectRequest({statusCode: 200, token}));
    return api.sales.bundles.all({token, query});
  });
});
