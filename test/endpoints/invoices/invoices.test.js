const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("invoices/invoices", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should list invoices", () => {
    const query = {transactionId: "12312312312312"};
    axiosMock.onGet("/invoices", query).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.invoices.invoices.all({token, jwtToken, query});
  });

  it("should return a single invoices", () => {
    const id = "12312312312312";
    axiosMock.onGet(`/invoices/${id}`)
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.invoices.invoices.get({token, jwtToken, query: {}, id});
  });

  it("should list invoices failures", () => {
    const query = {transactionId: "12312312312312"};
    axiosMock.onGet("/failures", query).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.invoices.invoices.getInvoicesFailures({token, jwtToken, query});
  });

  it("should retry invoicing", () => {
    axiosMock.onPost("/retry").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.invoices.invoices.retryInvoicing({
      jwtToken,
      token,
      data: {
        transactionId: "123"
      }
    });
  });
});
