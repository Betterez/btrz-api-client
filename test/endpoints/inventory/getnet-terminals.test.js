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
      serialNumber: getnetTerminal.serialNumber
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
});
