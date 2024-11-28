const {
  axiosMock, expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/financing-costs", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a financing cost", () => {
    axiosMock.onPost("/financing-costs").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.financingCosts.create({
      jwtToken,
      token,
      financingCost: {
        name: "My financingCost"
      }
    });
  });

  it("should get all financing costs", () => {
    axiosMock.onGet("/financing-costs").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.financingCosts.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a financing cost", () => {
    const id = "1234";
    axiosMock.onPut(`/financing-costs/${id}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.financingCosts.update({
      jwtToken,
      token,
      id,
      financingCost: {
        name: "My Updated financing costs"
      }
    });
  });

  it("should get a financing cost", () => {
    const id = "1234";
    axiosMock.onGet(`/financing-costs/${id}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.financingCosts.get({
      jwtToken,
      token,
      id
    });
  });

  it("should delete a financing cost", () => {
    const id = "1234";
    axiosMock.onDelete(`/financing-costs/${id}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.financingCosts.remove({
      jwtToken,
      token,
      id
    });
  });
});
