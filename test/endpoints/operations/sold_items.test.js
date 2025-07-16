
const {expect} = require("chai");
const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js")
  .createApiClient({baseURL: "http://test.com"});

describe("operations/sold-items", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET request /sold-items endpoint", () => {
    const query = {page: 1};
    axiosMock.onGet("/sold-items").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      query
    }));

    return api.operations.soldItems.all({
      token,
      jwtToken,
      query
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should GET request /sold-items/{id} endpoint", () => {
    const soldItemId = "soldItemId1";
    axiosMock.onGet(`/sold-items/${soldItemId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));

    return api.operations.soldItems.get({
      token,
      jwtToken,
      soldItemId
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });
});
