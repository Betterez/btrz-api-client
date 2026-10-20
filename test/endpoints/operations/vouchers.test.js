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

  it("should GET vouchers by document type and number", () => {
    const query = {
      documentTypeId: "507f1f77bcf86cd799439011",
      documentNumber: "99887766",
      page: 1
    };
    axiosMock
      .onGet("/vouchers")
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.vouchers.all({jwtToken, token, query, providerId: "provider-1"});
  });
});

describe("operations/vouchers/compensations", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should POST a compensation", () => {
    const compensation = {
      voucherInfo: {
        type: "voucher",
        amount: "100",
        typeAmount: "%"
      },
      ticketIds: []
    };

    axiosMock
      .onPost("/vouchers/compensations")
      .reply(expectRequest({statusCode: 200, token, jwtToken}));

    return api.operations.vouchers.compensations.create({jwtToken, token, compensation});
  });
});
