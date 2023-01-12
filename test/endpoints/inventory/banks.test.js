const {
  axiosMock, expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/banks", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a custom content", () => {
    axiosMock.onPost("/banks").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.banks.create({
      jwtToken,
      token,
      banks: {
        name: "My custom contentl"
      }
    });
  });

  it("should get all pieces of custom content", () => {
    axiosMock.onGet("/banks").reply(expectRequest({statusCode: 200, token, jwtToken }));
    return api.inventory.banks.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a piece of custom content", () => {
    const bankId = "1234";
    axiosMock.onPut(`/banks/${bankId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.banks.update({
      jwtToken,
      token,
      bankId,
      banks: {
        name: "My Updated custom content"
      }
    });
  });

  it("should get a piece of custom content", () => {
    const bankId = "1234";
    axiosMock.onGet(`/banks/${bankId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.banks.get({
      jwtToken,
      token,
      bankId
    });
  });

  it("should delete a piece of custom content", () => {
    const bankId = "1234";
    axiosMock.onDelete(`/banks/${bankId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.banks.remove({
      jwtToken,
      token,
      bankId
    });
  });
});
