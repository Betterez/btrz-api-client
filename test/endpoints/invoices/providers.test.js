const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("invoices/providers", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should list providers", () => {
    axiosMock.onGet("/providers").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.invoices.providers.all({token, jwtToken});
  });

  it("should create a provider", () => {
    axiosMock.onPost("/providers").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.invoices.providers.create({
      jwtToken,
      token,
      data: {
        invoiceProviderId: "example",
        params: [
          {name: "example", value: "value"}
        ]
      }
    });
  });

  it("should update a provider", () => {
    const providerId = "123123123123";
    const data = {
      params: [
        {name: "example", value: "new value"}
      ]
    };
    axiosMock.onPut(`/providers/${providerId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.invoices.providers.update({jwtToken, token, id: providerId, data});
  });
});
