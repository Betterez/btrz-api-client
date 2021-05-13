const {
  axiosMock, expectRequest
} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("operations/loans", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all loans", () => {
    axiosMock.onGet("/loans").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.operations.loans.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should get a loan", () => {
    const loanId = "1234";
    axiosMock.onGet(`/loans/${loanId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.operations.loans.get({
      jwtToken,
      token,
      loanId
    });
  });
});
