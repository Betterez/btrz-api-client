const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("accounts/printers", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the printers", () => {
    const query = {};

    axiosMock.onGet("/printers", {params: query})
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.printers.all({token, query});
  });
});
