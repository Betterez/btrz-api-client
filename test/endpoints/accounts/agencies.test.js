const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("accounts/agencies", () => {
  const jwtToken = "I owe you a JWT token";
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should PUT credit limit for an agency", () => {
    const agencyId = "507f1f77bcf86cd799439011";
    const data = {
      limitAmount: 1000,
      unlimited: false
    };
    axiosMock.onPut(`/agencies/${agencyId}/credit-limit`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: data
    }));
    return api.accounts.agencies.putCreditLimit({
      token,
      jwtToken,
      agencyId,
      data
    });
  });

  it("should PUT credit limit with wrapped creditLimit body", () => {
    const agencyId = "507f1f77bcf86cd799439012";
    const data = {
      creditLimit: {
        limitAmount: 2000,
        unlimited: true
      }
    };
    axiosMock.onPut(`/agencies/${agencyId}/credit-limit`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: data
    }));
    return api.accounts.agencies.putCreditLimit({
      token,
      jwtToken,
      agencyId,
      data
    });
  });
});
