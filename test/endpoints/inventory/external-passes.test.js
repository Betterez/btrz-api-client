const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("inventory/external-passes", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should get all esternal passes", () => {
    axiosMock.onGet("/external-passes").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.externalPasses.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should get a esternal passes", () => {
    const externalPassId = "1234";
    axiosMock.onGet(`/external-passes/${externalPassId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.externalPasses.get({
      jwtToken,
      token,
      externalPassId
    });
  });
});
