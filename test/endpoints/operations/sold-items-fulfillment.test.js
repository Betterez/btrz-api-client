
const {expect} = require("chai");
const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js")
  .createApiClient({baseURL: "http://test.com"});

describe("operations/sold-items/fulfillment", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET a list of objects containing _id and fulfillmentStatus", () => {
    const query = {soldItemIds: "a,b,c"};
    axiosMock.onGet("/sold-items/fulfillment").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      query
    }));

    return api.operations.soldItemsFulfillment.all({
      token,
      jwtToken,
      query
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });
});
