const { axiosMock, expectRequest } = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/operation-messages', () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(() => {
    axiosMock.reset();
  });

  it("should define a create method for an operation message", () => {
    axiosMock.onPost(`/operation-messages`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.operationMessages.create({
      jwtToken,
      token,
      opMsgData: {
        name: "My operationMessage",
        message: "Hello world!",
        active: true
      }
    });
  });

  it("should define a get method for listing all operation messages", () => {
    axiosMock.onGet(`/operation-messages`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.operationMessages.all({
      token
    });
  });

  it("should define an update method for an operation message", () => {
    const operationMessageId = "1234";
    axiosMock.onPut(`/operation-messages/${operationMessageId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.operationMessages.update({
      jwtToken,
      token,
      operationMessageId,
      opMsgData: {
        name: "My Updated operationMessage",
        active: false
      }
    });
  });

  it("should define a deletion method for an operation message", () => {
    const operationMessageId = "1234";
    axiosMock.onDelete(`/operation-messages/${operationMessageId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.operationMessages.remove({
      jwtToken,
      token,
      operationMessageId
    });
  });

  it("should define a get method for an operation message", () => {
    const operationMessageId = "1234";
    axiosMock.onGet(`/operation-messages/${operationMessageId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.operationMessages.get({
      token,
      operationMessageId
    });
  });
});
