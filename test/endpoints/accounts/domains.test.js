const {axiosMock, expectRequest} = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({baseURL: "http://test.com"});
const {
  expect
} = require("chai");

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
      expect(httpResponse.status).eql(200);
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
      expect(httpResponse.status).eql(200);
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
      expect(httpResponse.status).eql(204);
    });
  });
});
