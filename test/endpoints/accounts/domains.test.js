const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});
const assert = require("node:assert/strict");

describe("accounts/domains", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET a list of domains", () => {
    axiosMock.onGet("/domains").reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.accounts.domains.all({
      token
    }).then((httpResponse) => {
      assert.deepStrictEqual(httpResponse.status, 200);
    });
  });

  it("should POST a new domains", () => {
    const data = {
      domain: "example1"
    };
    axiosMock.onPost("/domains").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.domains.create({
      token,
      jwtToken,
      data
    }).then((httpResponse) => {
      assert.deepStrictEqual(httpResponse.status, 200);
    });
  });

  it("should DELETE a domain", () => {
    const domain = "example1";

    axiosMock.onDelete(`/domains/${domain}`).reply(expectRequest({
      statusCode: 204,
      token,
      jwtToken
    }));
    return api.accounts.domains.remove({
      domain,
      token,
      jwtToken
    }).then((httpResponse) => {
      assert.deepStrictEqual(httpResponse.status, 204);
    });
  });
});
