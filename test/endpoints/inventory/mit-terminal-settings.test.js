const {
  axiosMock, expectRequest
} = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/mit-terminals-settings", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a MIT terminal setting", () => {
    axiosMock.onPost("/mit-terminals-settings").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.mitTerminalsSettings.create({
      jwtToken,
      token,
      mitTerminalSettings: {
        name: "My MIT terminal setting",
        operatingCompanyId: "123",
        shiftLocationId: "12312300",
        user: "user",
        password: "password"
      }
    });
  });

  it("should get all MIT terminals settings", () => {
    axiosMock.onGet("/mit-terminals-settings").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.mitTerminalsSettings.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a MIT terminal setting", () => {
    const id = "1234";
    axiosMock.onPut(`/mit-terminals-settings/${id}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.mitTerminalsSettings.update({
      jwtToken,
      token,
      id,
      mitTerminalSettings: {
        name: "My MIT terminal setting",
        operatingCompanyId: "123",
        shiftLocationId: "12312300",
        user: "user",
        password: "password"
      }
    });
  });

  it("should get a MIT terminal setting", () => {
    const id = "1234";
    axiosMock.onGet(`/mit-terminals-settings/${id}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.mitTerminalsSettings.get({
      jwtToken,
      token,
      id
    });
  });

  it("should delete a MIT terminal setting", () => {
    const id = "1234";
    axiosMock.onDelete(`/mit-terminals-settings/${id}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.mitTerminalsSettings.remove({
      jwtToken,
      token,
      id
    });
  });
});
