const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("invoices/providers/{invoiceProviderId}/sequences", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";
  const invoiceProviderId = "invoiceProviderId";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should list provider sequences", () => {
    axiosMock.onGet(`/providers/${invoiceProviderId}/sequences`)
      .reply(expectRequest({statusCode: 200, token, jwtToken, invoiceProviderId}));
    return api.invoices.providersSequences.all({token, jwtToken, invoiceProviderId});
  });


  it("should create a provider sequence", () => {
    axiosMock.onPost(`/providers/${invoiceProviderId}/sequences`)
      .reply(expectRequest({statusCode: 200, token, jwtToken, invoiceProviderId}));
    return api.invoices.providersSequences.create({
      jwtToken,
      token,
      invoiceProviderId,
      data: {
        firstNumber: 1,
        lastNumber: 5
      }
    });
  });

  it("should delete an invoice provider sequence", () => {
    const sequenceId = "1234";
    axiosMock.onDelete(`/providers/${invoiceProviderId}/sequences/${sequenceId}`)
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.invoices.providersSequences.remove({
      jwtToken,
      token,
      invoiceProviderId,
      id: sequenceId
    });
  });
});
