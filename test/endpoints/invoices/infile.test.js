const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("invoices/infile", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should create an infile invoice", () => {
    axiosMock.onPost("/infile").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.invoices.infile.create({
      jwtToken,
      token,
      data: {
        invoiceProviderId: "example"
      }
    });
  });
});
