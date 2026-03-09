const {
  axiosMock, expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/banks", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a bank", () => {
    const bank = {name: "My bank", accountNumbers: [{number: "123", currency: "USD", alias: "Main"}]};
    axiosMock.onPost("/banks", {bank}).reply(expectRequest({statusCode: 200, token, jwtToken, body: {bank}}));
    return api.inventory.banks.create({
      jwtToken,
      token,
      bank
    });
  });

  it("should get all pieces of bank", () => {
    axiosMock.onGet("/banks").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.banks.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a bank", () => {
    const bankId = "1234";
    const bank = {name: "My Updated bank", accountNumbers: [{number: "123", currency: "USD", alias: "Main"}]};
    axiosMock.onPut(`/banks/${bankId}`, {bank}).reply(expectRequest({statusCode: 200, token, jwtToken, body: {bank}}));
    return api.inventory.banks.update({
      jwtToken,
      token,
      bankId,
      bank
    });
  });

  it("should get a piece of bank", () => {
    const bankId = "1234";
    axiosMock.onGet(`/banks/${bankId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.banks.get({
      jwtToken,
      token,
      bankId
    });
  });

  it("should delete a piece of bank", () => {
    const bankId = "1234";
    axiosMock.onDelete(`/banks/${bankId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.banks.remove({
      jwtToken,
      token,
      bankId
    });
  });
});
