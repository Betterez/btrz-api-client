const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("invoices/system", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should create a system invoice", () => {
    axiosMock.onPost("/system").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.invoices.system.create({
      jwtToken,
      token,
      data: {
        invoiceProviderId: "example"
      }
    });
  });

  it("should validate the payload for create a system invoice", () => {
    axiosMock.onPost("/system?onlyValidateRequest=true").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.invoices.system.validateCreate({
      jwtToken,
      token,
      data: {}
    });
  });
});
