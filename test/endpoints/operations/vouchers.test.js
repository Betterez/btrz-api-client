const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("operations/vouchers", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should POST a customer", () => {
    const voucher = {
      value: 123,
      assignedCustomer: {
        firstName: "someFirstName",
        lastName: "someLastName"
      }
    };

    axiosMock
      .onPost("/vouchers")
      .reply(expectRequest({statusCode: 200, token, jwtToken}));

    return api.operations.vouchers.create({jwtToken, token, voucher});
  });
});
