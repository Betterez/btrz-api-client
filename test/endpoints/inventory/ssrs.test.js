const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/ssrs", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list ssrs", () => {
    axiosMock.onGet("/ssrs").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.ssrs.all({token});
  });
});
