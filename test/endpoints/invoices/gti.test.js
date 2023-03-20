const {axiosMock, expectRequest} = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("invoices/gti", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should create an gti invoice", () => {
    axiosMock.onPost("/gti").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.invoices.gti.create({
      jwtToken,
      token,
      data: {
        invoiceProviderId: "example"
      }
    });
  });
});
