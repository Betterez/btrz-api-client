const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("invoices/infileJson", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should create an infileJson invoice", () => {
    axiosMock.onPost("/infile-json").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.invoices.infileJson.create({
      jwtToken,
      token,
      data: {
        transactionId: "trx1",
        invoiceProviderId: "provider1",
        invoiceInfo: {buyer: {type: "AFC", name: ""}}
      }
    });
  });

  it("should validate the payload for create an infileJson invoice", () => {
    axiosMock.onPost("/infile-json?onlyValidateRequest=true").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.invoices.infileJson.validateCreate({
      jwtToken,
      token,
      data: {}
    });
  });
});
