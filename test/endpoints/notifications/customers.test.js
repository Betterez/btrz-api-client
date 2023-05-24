const {expect} = require("chai");
const {axiosMock} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("notifications/customers", () => {
  const jwtToken = "myJwtToken";
  const token = "customerApiKey";

  describe("sendResetPasswordEmail", () => {
    const query = {
      providerId: "provider123",
      lang: "es",
      email: "myEmail@betterez.com"
    };
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
  describe("sendActivationEmail", () => {
    const query = {
      providerId: "provider123"
    };
    const body = {
      "firstName": "fakeName",
      "lastName": "fakeLastName",
      "email": "fakeEmail"
    };
    it("Should POST a activation email", () => {
      axiosMock.onPost("/customers/activation").reply((config) => {
        expect(config.params).to.be.eql(query);
        expect(config.data).to.deep.equal(JSON.stringify(body));
        expect(config.headers["x-api-key"]).to.be.eql(token);
        return [200];
      });
      return api.notifications.customers.sendActivationEmail({
        token,
        query,
        data: body
      });
    });
  });
});
