const {expect} = require("chai");
const {axiosMock} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("notifications/external-customers", () => {
  const jwtToken = "myJwtToken";
  const token = "myApiKey";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should POST to request Saldo Max verification code (ado/registration)", () => {
    const data = {email: "user@example.com"};
    axiosMock.onPost("/external-customers/ado/registration").reply((config) => {
      expect(config.data).to.equal(JSON.stringify(data));
      expect(config.headers["x-api-key"]).to.eql(token);
      expect(config.headers.authorization).to.eql(`Bearer ${jwtToken}`);
      return [200, {code: "success", message: "Registration successful"}];
    });

    return api.notifications.externalCustomers.requestSaldoMaxVerificationCode({
      token,
      jwtToken,
      data
    }).then((res) => {
      expect(res.data).to.eql({code: "success", message: "Registration successful"});
    });
  });
});
