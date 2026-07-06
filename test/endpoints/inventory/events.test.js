const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/events", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get an event by id", () => {
    const eventId = "event123";
    axiosMock.onGet(`/event/${eventId}`).reply(expectRequest({statusCode: 200, token}));
    return api.inventory.events.get({
      token,
      eventId
    });
  });
});
