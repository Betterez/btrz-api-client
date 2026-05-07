const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("operations/trip-change-info", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a trip info to change", () => {
    const productId = "productId1";
    axiosMock.onGet(`/trip-change-info/${productId}`).reply(expectRequest({statusCode: 200, token}));
    return api.operations.tripChangeInfo.get({token, jwtToken, productId});
  });
});
