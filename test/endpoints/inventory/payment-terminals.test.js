const {
  axiosMock, expectRequest
} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/payment-terminals", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a payment terminal", () => {
    axiosMock.onPost("/payment-terminals").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.paymentTerminals.create({
      jwtToken,
      token,
      paymentTerminal: {
        name: "My payment terminal"
      }
    });
  });

  it("should get all payment terminals", () => {
    axiosMock.onGet("/payment-terminals").reply(expectRequest({statusCode: 200, token, jwtToken }));
    return api.inventory.paymentTerminals.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a payment terminal", () => {
    const paymentTerminalId = "1234";
    axiosMock.onPut(`/payment-terminals/${paymentTerminalId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.paymentTerminals.update({
      jwtToken,
      token,
      paymentTerminalId,
      paymentTerminal: {
        name: "My Updated payment terminal it"
      }
    });
  });

  it("should get a payment terminal", () => {
    const paymentTerminalId = "1234";
    axiosMock.onGet(`/payment-terminals/${paymentTerminalId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.paymentTerminals.get({
      jwtToken,
      token,
      paymentTerminalId
    });
  });

  it("should delete a payment terminal", () => {
    const paymentTerminalId = "1234";
    axiosMock.onDelete(`/payment-terminals/${paymentTerminalId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.paymentTerminals.remove({
      jwtToken,
      token,
      paymentTerminalId
    });
  });
});
