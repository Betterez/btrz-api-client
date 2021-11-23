const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js")
  .createApiClient({baseURL: "http://test.com"});

describe("gps/scanner-app-location", () => {
  const apiKey = "yourAccountAPIKey";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET a location", () => {
    const routeId = "myRoute";
    const scheduleId = "myScheduleId";
    const date = "2020-01-01";
    const includeTravelledPath = true;
    const query = {
      routeId,
      scheduleId,
      date,
      includeTravelledPath
    };
    axiosMock.onGet("/scanner-app-location").reply(expectRequest({statusCode: 200, token: apiKey}));
    return api.gps.scannerAppLocation.get({token: apiKey, query});
  });
});
