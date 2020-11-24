const {expect} = require("chai");
const {axiosMock} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("notifications/customers", () => {
  const jwtToken = "myJwtToken";
  const token = "customerApiKey";
  const query = {
    providerId: "provider123",
    lang: "es",
    email: "myEmail@betterez.com"
  };

  describe("sendResetPasswordEmail", () => {
    it("Should POST a reset email", () => {
      axiosMock.onPost("/customers/reset").reply((config) => {
        expect(config.params).to.be.eql(query);
        expect(config.headers.authorization).to.be.eql(`Bearer ${jwtToken}`);
        const response = {
          email: query.email
        };
        return [200, response];
      });

      return api.notifications.customers.sendResetPasswordEmail({
        token, jwtToken, query
      });
    });
  });
});
