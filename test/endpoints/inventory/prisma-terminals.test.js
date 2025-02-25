const {
  axiosMock, expectRequest
} = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/prisma-terminals", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a Prisma terminal", () => {
    axiosMock.onPost("/prisma-terminals").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.prismaTerminals.create({
      jwtToken,
      token,
      prismaTerminal: {
        name: "My Prisma terminal",
        externalId: "123"
      }
    });
  });

  it("should get all Prisma terminals", () => {
    axiosMock.onGet("/prisma-terminals").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.prismaTerminals.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a Prisma terminal", () => {
    const prismaTerminalId = "1234";
    axiosMock.onPut(`/prisma-terminals/${prismaTerminalId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.prismaTerminals.update({
      jwtToken,
      token,
      prismaTerminalId,
      prismaTerminal: {
        name: "My Updated Prisma terminal it",
        externalId: "123"
      }
    });
  });

  it("should get a Prisma terminal", () => {
    const prismaTerminalId = "1234";
    axiosMock.onGet(`/prisma-terminals/${prismaTerminalId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.prismaTerminals.get({
      jwtToken,
      token,
      prismaTerminalId
    });
  });

  it("should delete a Prisma terminal", () => {
    const prismaTerminalId = "1234";
    axiosMock.onDelete(`/prisma-terminals/${prismaTerminalId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.prismaTerminals.remove({
      jwtToken,
      token,
      prismaTerminalId
    });
  });
});
