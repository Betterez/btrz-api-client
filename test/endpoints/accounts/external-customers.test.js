const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("accounts/external-customers", () => {
  const jwtToken = "I owe you a JWT token";
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should POST Saldo Max registration (external-customers/ado)", () => {
    const data = {
      firstName: "TestName",
      lastName: "TestLastName",
      email: "test@betterez.com",
      password: "YmFzZTY0cGFzc3dvcmQ=",
      verificationCode: "689411",
      isoCode: "AR"
    };
    axiosMock.onPost("/external-customers/ado").reply(expectRequest({
      statusCode: 201,
      token,
      jwtToken,
      body: data
    }));
    return api.accounts.externalCustomers.registerSaldoMax({
      token,
      jwtToken,
      data
    });
  });

  it("should POST with body wrapper when using body key", () => {
    const data = {
      body: {
        firstName: "A",
        lastName: "B",
        email: "a@b.com",
        password: "cGFzcw==",
        verificationCode: "123",
        isoCode: "MX"
      }
    };
    const withoutApiKey = true;
    axiosMock.onPost("/external-customers/ado").reply(expectRequest({
      statusCode: 201,
      jwtToken,
      withoutApiKey,
      body: data
    }));
    return api.accounts.externalCustomers.registerSaldoMax({
      jwtToken,
      data
    });
  });
});
