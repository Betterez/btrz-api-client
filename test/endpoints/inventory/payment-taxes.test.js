const {
  axiosMock, expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/payment-taxes", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";
  const id = "5f9b0a1c2d3e4f5a6b7c8d9e";
  const paymentTax = {name: "PERC. RG 3819", code: "RG3819", rate: 5};

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list the payment taxes with the given query", () => {
    const query = {providerIds: "a,b", enabled: true};
    axiosMock.onGet("/payment-taxes").reply(expectRequest({statusCode: 200, token, query}));
    return api.inventory.paymentTaxes.all({token, jwtToken, query});
  });

  it("should get a payment tax", () => {
    axiosMock.onGet(`/payment-taxes/${id}`).reply(expectRequest({statusCode: 200, token}));
    return api.inventory.paymentTaxes.get({token, jwtToken, id});
  });

  it("should create a payment tax sending the plain body", () => {
    axiosMock.onPost("/payment-taxes").reply(expectRequest({statusCode: 200, token, jwtToken, body: paymentTax}));
    return api.inventory.paymentTaxes.create({token, jwtToken, paymentTax});
  });

  it("should update a payment tax sending the plain body", () => {
    axiosMock.onPut(`/payment-taxes/${id}`).reply(expectRequest({statusCode: 200, token, jwtToken, body: paymentTax}));
    return api.inventory.paymentTaxes.update({token, jwtToken, id, paymentTax});
  });

  it("should delete a payment tax", () => {
    axiosMock.onDelete(`/payment-taxes/${id}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.paymentTaxes.remove({token, jwtToken, id});
  });
});
