const {
  axiosMock, expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/control-classes", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a control class", () => {
    axiosMock.onPost("/control-classes").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.controlClasses.create({
      jwtToken,
      token,
      controlClass: {
        name: "My controlClass"
      }
    });
  });

  it("should get all pieces of controlClass", () => {
    axiosMock.onGet("/control-classes").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.controlClasses.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a controlClass", () => {
    const controlClassId = "1234";
    axiosMock.onPut(`/control-classes/${controlClassId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.controlClasses.update({
      jwtToken,
      token,
      controlClassId,
      controlClass: {
        name: "My Updated controlClass"
      }
    });
  });

  it("should get a controlClass", () => {
    const controlClassId = "1234";
    axiosMock.onGet(`/control-classes/${controlClassId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.controlClasses.get({
      jwtToken,
      token,
      controlClassId
    });
  });

  it("should delete a controlClass", () => {
    const controlClassId = "1234";
    axiosMock.onDelete(`/control-classes/${controlClassId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.controlClasses.remove({
      jwtToken,
      token,
      controlClassId
    });
  });
});
