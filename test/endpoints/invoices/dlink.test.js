const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("invoices/dlink", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should create a dlink invoice", () => {
    axiosMock.onPost("/dlink").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.invoices.dlink.create({
      jwtToken,
      token,
      data: {
        invoiceProviderId: "example"
      }
    });
  });

  it("should validate the payload for create a dlink invoice", () => {
    axiosMock.onPost("/dlink?onlyValidateRequest=true").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.invoices.dlink.validateCreate({
      jwtToken,
      token,
      data: {}
    });
  });
});
