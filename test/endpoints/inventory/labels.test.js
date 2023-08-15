const {
  axiosMock, expectRequest
} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/labels", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a label", () => {
    axiosMock.onPost("/labels").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.labels.create({
      jwtToken,
      token,
      label: {
        name: "My label"
      }
    });
  });

  it("should get all labels", () => {
    axiosMock.onGet("/labels").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.labels.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a label", () => {
    const labelId = "1234";
    axiosMock.onPut(`/labels/${labelId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.labels.update({
      jwtToken,
      token,
      labelId,
      serviceType: {
        name: "My Updated label it"
      }
    });
  });

  it("should get a label", () => {
    const labelId = "1234";
    axiosMock.onGet(`/labels/${labelId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.labels.get({
      jwtToken,
      token,
      labelId
    });
  });

  it("should delete a label", () => {
    const labelId = "1234";
    axiosMock.onDelete(`/labels/${labelId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.labels.remove({
      jwtToken,
      token,
      labelId
    });
  });
});
