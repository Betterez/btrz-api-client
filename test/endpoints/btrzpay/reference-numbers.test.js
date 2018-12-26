const { axiosMock, expectRequest } = require("./../../test-helpers"),
  api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("btrzpay/reference-numbers", () => {
  const token = "token",
    jwtToken = 'I owe you a JWT token';

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a reference number", () => {
    axiosMock.onPost("/reference-numbers").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.btrzpay.referenceNumbers.create({
      jwtToken,
      token,
      referenceNumberRequest: {
        type: "pay_me_later",
        params: {}
      }
    });
  });
});
