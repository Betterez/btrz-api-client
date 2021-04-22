const {
  axiosMock, expectRequest
} = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({
  baseURL: "http://test.com"
});

describe("/inventory/insurances/:productId/cost", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should return insurances cost", () => {
    axiosMock.onGet("/insurances/1/cost", {
      params: {
        declaredValue: 100,
        something: "else"
      }
    }).reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.inventory.insurancesCost.get({
      token,
      productId: 1,
      declaredValue: 100,
      query: {
        something: "else"
      }
    });
  });
});
