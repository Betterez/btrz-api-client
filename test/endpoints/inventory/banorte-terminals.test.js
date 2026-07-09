describe("inventory/banorte-terminals", () => {
  const {
    axiosMock,
    expectRequest
  } = require("../../test-helpers.js");
  const api = require("../../../src/client.js").createApiClient({
    baseURL: "http://test.com"
  });

  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should retrieve a list of Banorte terminals", () => {
    const query = {page: 2};

    axiosMock.onGet("/banorte-terminals", {params: query}).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));

    return api.inventory.banorteTerminals.all({
      jwtToken,
      token,
      query
    });
  });

  it("should retrieve an existing Banorte terminal by id", () => {
    const banorteTerminalId = "1234123412341234";

    axiosMock.onGet(`/banorte-terminals/${banorteTerminalId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));

    return api.inventory.banorteTerminals.get({
      jwtToken,
      token,
      banorteTerminalId
    });
  });

  it("should create a new Banorte terminal", async () => {
    const banorteTerminal = {
      name: "New Banorte Terminal",
      serialNumber: "Test Serial Number"
    };

    axiosMock.onPost("/banorte-terminals").reply(expectRequest({
      statusCode: 200, token, jwtToken, body: {banorteTerminal}
    }));

    return api.inventory.banorteTerminals.create({
      jwtToken,
      token,
      banorteTerminal
    });
  });

  it("should create a new Banorte terminal with stationId (location)", async () => {
    const banorteTerminal = {
      name: "Banorte Terminal at Station",
      serialNumber: "SN-001",
      stationId: "5f243d100617680712e78dd7"
    };

    axiosMock.onPost("/banorte-terminals").reply(expectRequest({
      statusCode: 200, token, jwtToken, body: {banorteTerminal}
    }));

    return api.inventory.banorteTerminals.create({
      jwtToken,
      token,
      banorteTerminal
    });
  });

  it("should delete a Banorte terminal", () => {
    const banorteTerminalId = "1234";

    axiosMock.onDelete(`/banorte-terminals/${banorteTerminalId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));

    return api.inventory.banorteTerminals.remove({
      jwtToken,
      token,
      banorteTerminalId
    });
  });

  it("should update an existing Banorte terminal", async () => {
    const banorteTerminal = {
      _id: "terminal-id-123",
      name: "Updated Banorte Terminal",
      serialNumber: "Updated Serial Number"
    };

    const banorteTerminalFieldsToUpdate = {
      name: banorteTerminal.name,
      serialNumber: banorteTerminal.serialNumber,
      stationId: banorteTerminal.stationId
    };

    axiosMock.onPut(`/banorte-terminals/${banorteTerminal._id}`).reply(expectRequest({
      statusCode: 200, token, jwtToken, body: {banorteTerminal: banorteTerminalFieldsToUpdate}
    }));

    return api.inventory.banorteTerminals.update({
      jwtToken,
      token,
      banorteTerminal
    });
  });

  it("should update an existing Banorte terminal with stationId (location)", async () => {
    const banorteTerminalId = "terminal-id-456";
    const banorteTerminal = {
      _id: banorteTerminalId,
      name: "Terminal at Station",
      serialNumber: "SN-789",
      stationId: "5f243d100617680712e78dd7"
    };

    const expectedBody = {
      banorteTerminal: {
        name: banorteTerminal.name,
        serialNumber: banorteTerminal.serialNumber,
        stationId: banorteTerminal.stationId
      }
    };

    axiosMock.onPut(`/banorte-terminals/${banorteTerminalId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken, body: expectedBody
    }));

    return api.inventory.banorteTerminals.update({
      jwtToken,
      token,
      banorteTerminalId,
      banorteTerminal
    });
  });

  it("should update an existing Banorte terminal with empty stationId", async () => {
    const banorteTerminal = {
      _id: "terminal-id-999",
      name: "Terminal No Location",
      serialNumber: "SN-999",
      stationId: ""
    };

    const expectedBody = {
      banorteTerminal: {
        name: banorteTerminal.name,
        serialNumber: banorteTerminal.serialNumber,
        stationId: ""
      }
    };

    axiosMock.onPut(`/banorte-terminals/${banorteTerminal._id}`).reply(expectRequest({
      statusCode: 200, token, jwtToken, body: expectedBody
    }));

    return api.inventory.banorteTerminals.update({
      jwtToken,
      token,
      banorteTerminal
    });
  });
});
