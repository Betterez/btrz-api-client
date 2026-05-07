const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("sales/payment-providers", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list payment providers", () => {
    axiosMock.onGet("/payment-providers").reply(expectRequest({statusCode: 200, token}));
    return api.sales.paymentProviders.all({token});
  });

  it("should list payment providers when request include jwtToken", () => {
    axiosMock.onGet("/payment-providers").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.sales.paymentProviders.all({token, jwtToken});
  });
});
