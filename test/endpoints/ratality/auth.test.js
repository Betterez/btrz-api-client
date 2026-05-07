const assert = require("node:assert/strict");
const {axiosMock} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://ratality.com"});

describe("auth", () => {
  afterEach(() => {
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
      assert.deepStrictEqual(config.data, JSON.stringify(data));
      return [200, response];
    });
    return api.ratality.auth.create({data});
  });
});
