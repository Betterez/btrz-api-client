const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/accounts/print-settings", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the printers", () => {
    const query = {};

    axiosMock.onGet("/print-settings", {params: query})
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.printSettings.all({token, query});
  });

  it("should update a print setting", () => {
    const printSettings = {
      name: "A"
    };

    axiosMock.onPut("/print-settings")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.printSettings.update({
      token, jwtToken, printSettings
    });
  });
});
