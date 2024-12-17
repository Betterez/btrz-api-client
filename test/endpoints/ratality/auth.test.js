const {expect} = require("chai");
const {axiosMock} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://ratality.com" });

describe("auth", () => {
  afterEach(function() {
    axiosMock.restore();
  });

  it("should perform a token create", () => {
    const data = {
      "username": "user_123",
      "password": "pass_123",
      "rememberMe": true
    };
    const response = {id_token: "someToken"};
    axiosMock.onPost("/authenticate").reply((config) => {
      expect(config.data).to.eql(JSON.stringify(data));
      return [200, response];
    });
    return api.ratality.auth.create({data});
  });
});
