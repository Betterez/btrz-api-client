const {
  axiosMock, expectRequest
} = require("./../../test-helpers.js");

const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("sales/order", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should return a parcel quote", () => {
    axiosMock.onPost("/parcel-quotes").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.sales.parcelQuotes.get({
      jwtToken,
      token,
      parcelQuoteData: {
        parcels: []
      },
      headers: {}
    });
  });
});
