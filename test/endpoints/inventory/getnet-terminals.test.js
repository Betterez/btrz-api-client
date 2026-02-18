describe("inventory/getnet-terminals", () => {
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

  it("should retrieve a list of Getnet terminals", () => {
    const query = {page: 2};

    axiosMock.onGet("/getnet-terminals", {params: query}).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));

    return api.inventory.getnetTerminals.all({
      jwtToken,
      token,
      query
    });
  });

  it("should retrieve an existing Getnet terminal by id", () => {
    const getnetTerminalId = "1234123412341234";

    axiosMock.onGet(`/getnet-terminals/${getnetTerminalId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));

    return api.inventory.getnetTerminals.get({
      jwtToken,
      token,
      getnetTerminalId
    });
  });

  it("should create a new Getnet terminal", async () => {
    const getnetTerminal = {
      name: "New Getnet Terminal",
      serialNumber: "Test Serial Number"
    };

    axiosMock.onPost("/getnet-terminals").reply(expectRequest({
      statusCode: 200, token, jwtToken, body: {getnetTerminal}
    }));

    return api.inventory.getnetTerminals.create({
      jwtToken,
      token,
      getnetTerminal
    });
  });

  it("should create a new Getnet terminal with stationId (location)", async () => {
    const getnetTerminal = {
      name: "Getnet Terminal at Station",
      serialNumber: "SN-001",
      stationId: "5f243d100617680712e78dd7"
    };

    axiosMock.onPost("/getnet-terminals").reply(expectRequest({
      statusCode: 200, token, jwtToken, body: {getnetTerminal}
    }));

    return api.inventory.getnetTerminals.create({
      jwtToken,
      token,
      getnetTerminal
    });
  });

  it("should delete a Getnet terminal", () => {
    const getnetTerminalId = "1234";

    axiosMock.onDelete(`/getnet-terminals/${getnetTerminalId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));

    return api.inventory.getnetTerminals.remove({
      jwtToken,
      token,
      getnetTerminalId
    });
  });

  it("should update an existing Getnet terminal", async () => {
    const getnetTerminal = {
      _id: "terminal-id-123",
      name: "Updated Getnet Terminal",
      serialNumber: "Updated Serial Number"
    };

    const getnetTerminalFieldsToUpdate = {
      name: getnetTerminal.name,
      serialNumber: getnetTerminal.serialNumber,
      stationId: getnetTerminal.stationId
    };

    axiosMock.onPut(`/getnet-terminals/${getnetTerminal._id}`).reply(expectRequest({
      statusCode: 200, token, jwtToken, body: {getnetTerminal: getnetTerminalFieldsToUpdate}
    }));

    return api.inventory.getnetTerminals.update({
      jwtToken,
      token,
      getnetTerminal
    });
  });

  it("should update an existing Getnet terminal with stationId (location)", async () => {
    const getnetTerminalId = "terminal-id-456";
    const getnetTerminal = {
      _id: getnetTerminalId,
      name: "Terminal at Station",
      serialNumber: "SN-789",
      stationId: "5f243d100617680712e78dd7"
    };

    const expectedBody = {
      getnetTerminal: {
        name: getnetTerminal.name,
        serialNumber: getnetTerminal.serialNumber,
        stationId: getnetTerminal.stationId
      }
    };

    axiosMock.onPut(`/getnet-terminals/${getnetTerminalId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken, body: expectedBody
    }));

    return api.inventory.getnetTerminals.update({
      jwtToken,
      token,
      getnetTerminalId,
      getnetTerminal
    });
  });

  it("should update an existing Getnet terminal with empty stationId", async () => {
    const getnetTerminal = {
      _id: "terminal-id-999",
      name: "Terminal No Location",
      serialNumber: "SN-999",
      stationId: ""
    };

    const expectedBody = {
      getnetTerminal: {
        name: getnetTerminal.name,
        serialNumber: getnetTerminal.serialNumber,
        stationId: ""
      }
    };

    axiosMock.onPut(`/getnet-terminals/${getnetTerminal._id}`).reply(expectRequest({
      statusCode: 200, token, jwtToken, body: expectedBody
    }));

    return api.inventory.getnetTerminals.update({
      jwtToken,
      token,
      getnetTerminal
    });
  });
});
