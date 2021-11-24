const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js")
  .createApiClient({baseURL: "http://test.com"});

describe("operations/outlook-trips", () => {
  const apiKey = "yourAccountAPIKey";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET some trips", () => {
    const routeId = "myRoute";
    const scheduleId = "myScheduleId";
    const from = "2020-01-01";
    const to = "2020-01-01";
    const productId = "myProductId";
    const query = {
      routeId,
      scheduleId,
      from,
      to,
      productId
    };
    axiosMock.onGet("/outlook-trips").reply(expectRequest({statusCode: 200, token: apiKey}));
    return api.operations.outlookTrips.get({token: apiKey, query});
  });
});
