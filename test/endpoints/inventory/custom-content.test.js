const {
  axiosMock, expectRequest
} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe.only("inventory/custom-content", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a custom content", () => {
    axiosMock.onPost("/custom-content").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.customContent.create({
      jwtToken,
      token,
      customContent: {
        name: "My custom contentl"
      }
    });
  });

  it("should get all pieces of custom content", () => {
    axiosMock.onGet("/custom-content").reply(expectRequest({statusCode: 200, token, jwtToken }));
    return api.inventory.customContent.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a piece of custom content", () => {
    const customContentId = "1234";
    axiosMock.onPut(`/custom-content/${customContentId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.customContent.update({
      jwtToken,
      token,
      customContentId,
      customContent: {
        name: "My Updated custom content"
      }
    });
  });

  it("should get a piece of custom content", () => {
    const customContentId = "1234";
    axiosMock.onGet(`/custom-content/${customContentId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.customContent.get({
      jwtToken,
      token,
      customContentId
    });
  });

  it("should delete a piece of custom content", () => {
    const customContentId = "1234";
    axiosMock.onDelete(`/custom-content/${customContentId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.customContent.remove({
      jwtToken,
      token,
      customContentId
    });
  });
});
