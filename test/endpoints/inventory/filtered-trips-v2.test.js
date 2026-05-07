const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/v2/filtered-trips", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a filtered trip", () => {
    axiosMock.onPost("/v2/filtered-trips").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.filteredTripsV2.create({token, jwtToken, filteredTrip: {someProperty: "some value"}});
  });
});
