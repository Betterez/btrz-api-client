const {
  axiosMock, expectRequest
} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("operations/accounting-items", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all manifest forecast information in a single day", () => {
    axiosMock.onGet("/rms/manifest-forecast/").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.operations.rms.manifestForecasts.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should get all manifest forecast information for a single schedule in a range of dates", () => {
    const scheduleId = "1234";
    axiosMock.onGet(`/rms/manifest-forecast/${scheduleId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.operations.rms.manifestForecasts.get({
      jwtToken,
      token,
      scheduleId
    });
  });
});
