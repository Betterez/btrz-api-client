const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: ""});

describe("sales/sync-entry", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should call patch for entries in synchrotron", () => {
    const data = {};
    axiosMock.onPatch("/sync-entry").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.sales.syncEntry.patch({jwtToken, token, data});
  });
});
