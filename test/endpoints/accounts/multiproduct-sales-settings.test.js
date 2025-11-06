const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/multiproduct-sales-settings", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the multiproduct sales settings", () => {
    axiosMock.onGet("/multiproduct-sales-settings")
      .reply(expectRequest({statusCode: 200, token}));

    return api.accounts.multiproductSalesSettings.get({token, jwtToken});
  });

  it("should update multiproduct sales settings", () => {
    const data = {
      productsMapping: {"507f1f77bcf86cd799439011": ["507f1f77bcf86cd799439012"]},
      stationsMapping: {"507f1f77bcf86cd799439014": ["507f1f77bcf86cd799439015"]}
    };

    axiosMock.onPut("/multiproduct-sales-settings")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));

    return api.accounts.multiproductSalesSettings.update({
      token, jwtToken, data
    });
  });
});
