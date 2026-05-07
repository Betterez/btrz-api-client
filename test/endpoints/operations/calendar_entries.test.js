const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("operations/calendar-entries", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all calendar entries", () => {
    axiosMock.onGet("/calendar-entries").reply(expectRequest({statusCode: 200, token}));
    return api.operations.calendarEntries.all({token});
  });
});
