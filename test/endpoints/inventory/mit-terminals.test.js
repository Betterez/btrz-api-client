const {
  axiosMock, expectRequest
} = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/mit-terminals", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a MIT terminal", () => {
    axiosMock.onPost("/mit-terminals").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.mitTerminals.create({
      jwtToken,
      token,
      mitTerminal: {
        name: "My MIT terminal"
      }
    });
  });

  it("should get all MIT terminals", () => {
    axiosMock.onGet("/mit-terminals").reply(expectRequest({statusCode: 200, token, jwtToken }));
    return api.inventory.mitTerminals.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a MIT terminal", () => {
    const mitTerminalId = "1234";
    axiosMock.onPut(`/mit-terminals/${mitTerminalId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.mitTerminals.update({
      jwtToken,
      token,
      mitTerminalId,
      mitTerminal: {
        name: "My Updated MIT terminal it"
      }
    });
  });

  it("should get a MIT terminal", () => {
    const mitTerminalId = "1234";
    axiosMock.onGet(`/mit-terminals/${mitTerminalId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.mitTerminals.get({
      jwtToken,
      token,
      mitTerminalId
    });
  });

  it("should delete a MIT terminal", () => {
    const mitTerminalId = "1234";
    axiosMock.onDelete(`/mit-terminals/${mitTerminalId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.mitTerminals.remove({
      jwtToken,
      token,
      mitTerminalId
    });
  });
});
