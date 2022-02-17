const {
  axiosMock
} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({
  baseURL: "http://test.com"
});

describe("notifications/orders-rules-validations", () => {
  const token = "my-api-key";
  const jwtToken = "my-jwt";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should post an orders rules validations", () => {
    axiosMock.onPost("/orders-rules-validations").reply(({headers}) => {
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
