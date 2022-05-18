const {
  expect
} = require("chai");
const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/interline", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET a list of agencies", () => {
    axiosMock.onGet("/network/agencies").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.network.agencies.all({
      token,
      jwtToken
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should GET an agency by sellerID", () => {
    axiosMock.onGet("/network/agencies/sellerId").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.network.agencies.get({
      token,
      sellerId: "sellerId",
      jwtToken
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should update an agency", () => {
    const agency = {
      name: "A"
    };
    const query = {
      superUserId: "superUserId",
      superUserHash: "superUserHash"
    };
    const sellerId = "A";
    axiosMock.onPut(`/network/agencies/${sellerId}`)
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.network.agencies.update({
      token, jwtToken, agency, sellerId, query
    });
  });

  it("should create an agency", () => {
    const agency = {
      name: "A"
    };

    axiosMock.onPost("/network/agencies")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.network.agencies.create({
      token, jwtToken, agency
    });
  });

});
