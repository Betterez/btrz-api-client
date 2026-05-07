const {
  axiosMock
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("notifications/orders-rules-validations", () => {
  const token = "my-api-key";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should post an orders rules validations", () => {
    axiosMock.onPost("/orders-rules-validations").reply(() => {
      return [200];
    });
    return api.notifications.ordersRulesValidations.create({
      token,
      orderRulesValidation: {
        rules: {}, facts: {}
      }
    });
  });
});
