const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("sales/custom-fields", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list custom fields", () => {
    axiosMock.onGet("/custom-fields").reply(expectRequest({statusCode: 200, token}));
    return api.sales.customFields.all({token});
  });
});
