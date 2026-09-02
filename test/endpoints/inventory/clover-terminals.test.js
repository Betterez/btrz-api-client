describe("inventory/clover-terminals", () => {
  const assert = require("node:assert/strict");
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

  it("should retrieve a list of Clover terminals", () => {
    const query = {page: 2, stationId: "5f243d100617680712e78dd7", serialNumber: "DEV-001"};

    axiosMock.onGet("/clover-terminals", {params: query}).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));

    return api.inventory.cloverTerminals.all({
      jwtToken,
      token,
      query
    });
  });

  it("should retrieve an existing Clover terminal by id", () => {
    const cloverTerminalId = "1234123412341234";

    axiosMock.onGet(`/clover-terminals/${cloverTerminalId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));

    return api.inventory.cloverTerminals.get({
      jwtToken,
      token,
      cloverTerminalId
    });
  });

  it("should create a new Clover terminal", async () => {
    const cloverTerminal = {
      name: "New Clover Terminal",
      serialNumber: "Test Serial Number"
    };

    axiosMock.onPost("/clover-terminals").reply(expectRequest({
      statusCode: 200, token, jwtToken, body: {cloverTerminal}
    }));

    return api.inventory.cloverTerminals.create({
      jwtToken,
      token,
      cloverTerminal
    });
  });

  it("should create a new Clover terminal with stationId (location)", async () => {
    const cloverTerminal = {
      name: "Clover Terminal at Station",
      serialNumber: "SN-001",
      stationId: "5f243d100617680712e78dd7"
    };

    axiosMock.onPost("/clover-terminals").reply(expectRequest({
      statusCode: 200, token, jwtToken, body: {cloverTerminal}
    }));

    return api.inventory.cloverTerminals.create({
      jwtToken,
      token,
      cloverTerminal
    });
  });

  it("should delete a Clover terminal", () => {
    const cloverTerminalId = "1234";

    axiosMock.onDelete(`/clover-terminals/${cloverTerminalId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));

    return api.inventory.cloverTerminals.remove({
      jwtToken,
      token,
      cloverTerminalId
    });
  });

  it("should update an existing Clover terminal", async () => {
    const cloverTerminal = {
      _id: "terminal-id-123",
      name: "Updated Clover Terminal",
      serialNumber: "Updated Serial Number"
    };

    const cloverTerminalFieldsToUpdate = {
      name: cloverTerminal.name,
      serialNumber: cloverTerminal.serialNumber,
      stationId: cloverTerminal.stationId
    };

    axiosMock.onPut(`/clover-terminals/${cloverTerminal._id}`).reply(expectRequest({
      statusCode: 200, token, jwtToken, body: {cloverTerminal: cloverTerminalFieldsToUpdate}
    }));

    return api.inventory.cloverTerminals.update({
      jwtToken,
      token,
      cloverTerminal
    });
  });

  it("should update an existing Clover terminal with stationId (location)", async () => {
    const cloverTerminalId = "terminal-id-456";
    const cloverTerminal = {
      _id: cloverTerminalId,
      name: "Terminal at Station",
      serialNumber: "SN-789",
      stationId: "5f243d100617680712e78dd7"
    };

    const expectedBody = {
      cloverTerminal: {
        name: cloverTerminal.name,
        serialNumber: cloverTerminal.serialNumber,
        stationId: cloverTerminal.stationId
      }
    };

    axiosMock.onPut(`/clover-terminals/${cloverTerminalId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken, body: expectedBody
    }));

    return api.inventory.cloverTerminals.update({
      jwtToken,
      token,
      cloverTerminalId,
      cloverTerminal
    });
  });

  it("should update an existing Clover terminal with empty stationId", async () => {
    const cloverTerminal = {
      _id: "terminal-id-999",
      name: "Terminal No Location",
      serialNumber: "SN-999",
      stationId: ""
    };

    const expectedBody = {
      cloverTerminal: {
        name: cloverTerminal.name,
        serialNumber: cloverTerminal.serialNumber,
        stationId: ""
      }
    };

    axiosMock.onPut(`/clover-terminals/${cloverTerminal._id}`).reply(expectRequest({
      statusCode: 200, token, jwtToken, body: expectedBody
    }));

    return api.inventory.cloverTerminals.update({
      jwtToken,
      token,
      cloverTerminal
    });
  });

  it("should reject when Clover terminal is not found", async () => {
    const cloverTerminalId = "5f243d100617680712e78dd7";

    axiosMock.onGet(`/clover-terminals/${cloverTerminalId}`).reply(404, {
      code: "CLOVER_TERMINAL_NOT_FOUND"
    });

    await assert.rejects(
      () => {
        return api.inventory.cloverTerminals.get({jwtToken, token, cloverTerminalId});
      },
      (err) => {
        assert.equal(err.response.status, 404);
        assert.equal(err.response.data.code, "CLOVER_TERMINAL_NOT_FOUND");
        return true;
      }
    );
  });

  it("should reject when Clover terminal id is invalid", async () => {
    const cloverTerminalId = "not-an-object-id";

    axiosMock.onGet(`/clover-terminals/${cloverTerminalId}`).reply(400, {
      code: "INVALID_CLOVER_TERMINAL_ID"
    });

    await assert.rejects(
      () => {
        return api.inventory.cloverTerminals.get({jwtToken, token, cloverTerminalId});
      },
      (err) => {
        assert.equal(err.response.status, 400);
        assert.equal(err.response.data.code, "INVALID_CLOVER_TERMINAL_ID");
        return true;
      }
    );
  });

  it("should reject when Clover terminal name is duplicated", async () => {
    const cloverTerminal = {
      name: "Duplicate Name",
      serialNumber: "SN-UNIQUE"
    };

    axiosMock.onPost("/clover-terminals").reply(409, {
      code: "DUPLICATED_CLOVER_TERMINAL_NAME"
    });

    await assert.rejects(
      () => {
        return api.inventory.cloverTerminals.create({jwtToken, token, cloverTerminal});
      },
      (err) => {
        assert.equal(err.response.status, 409);
        assert.equal(err.response.data.code, "DUPLICATED_CLOVER_TERMINAL_NAME");
        return true;
      }
    );
  });

  it("should reject when Clover terminal serial number is duplicated", async () => {
    const cloverTerminal = {
      name: "Unique Name",
      serialNumber: "SN-DUPLICATE"
    };

    axiosMock.onPost("/clover-terminals").reply(409, {
      code: "DUPLICATE_CLOVER_TERMINAL_SERIAL_NUMBER"
    });

    await assert.rejects(
      () => {
        return api.inventory.cloverTerminals.create({jwtToken, token, cloverTerminal});
      },
      (err) => {
        assert.equal(err.response.status, 409);
        assert.equal(err.response.data.code, "DUPLICATE_CLOVER_TERMINAL_SERIAL_NUMBER");
        return true;
      }
    );
  });
});
