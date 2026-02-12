const {
  axiosMock, expectRequest
} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/operation-reasons", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create an operation reason", () => {
    axiosMock.onPost("/operation-reasons").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.operationReasons.create({
      jwtToken,
      token,
      operationReason: {
        name: "a name",
        type: "cut",
        lexiconKeys: {
          name: {
            key: "operationreason-name-......",
            values: {
              "en-us": "A name",
              "es-ar": "Un nombre"
            }
          }
        }
      }
    });
  });

  it("should get all operation reasons", () => {
    axiosMock.onGet("/operation-reasons").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.operationReasons.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update an operation reason", () => {
    const id = "1234";
    axiosMock.onPut(`/operation-reasons/${id}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.operationReasons.update({
      jwtToken,
      token,
      id,
      serviceType: {
        name: "My Updated label it"
      }
    });
  });

  it("should get an operation reason", () => {
    const id = "1234";
    axiosMock.onGet(`/operation-reasons/${id}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.operationReasons.get({
      jwtToken,
      token,
      id
    });
  });

  it("should delete an operation reason", () => {
    const id = "1234";
    axiosMock.onDelete(`/operation-reasons/${id}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.operationReasons.remove({
      jwtToken,
      token,
      id
    });
  });
});
