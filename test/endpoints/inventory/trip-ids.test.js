const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/trip-ids", () => {
  const token = "I owe you a token";
  const jwtToken = "jwt-token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create trip id (POST /direct-trip-ids)", () => {
    const data = {
      providerId: "5a9f2060d1aba834217f5b5e",
      routeId: "5a9f2060d1aba834217f5b5f",
      scheduleId: "schedule-1",
      departureDate: "2025-03-06",
      fareIds: "fare1:2",
      channel: "backoffice",
      productId: "5a9f2082d1aba6a732ae918a",
      originId: "5a9f2082d1aba6a732ae918b",
      destinationId: "5a9f2082d1aba6a732ae918c"
    };
    axiosMock.onPost("/direct-trip-ids", data).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.tripIds.create({token, jwtToken, data});
  });
});
