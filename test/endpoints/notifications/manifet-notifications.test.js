const {
  axiosMock
} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({
  baseURL: "http://test.com"
});

describe("notifications/manifest-notifications", () => {
  const token = "my-api-key";
  const jwtToken = "my-jwt";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should post a manifest notification", () => {
    const query = {
      param1: "param1"
    };
    axiosMock.onPost("/manifest-notifications").reply(({headers}) => {
      if (headers["x-api-key"] === token &&
        headers.authorization === `Bearer ${jwtToken}`) {
        return [200];
      }
      return [403];
    });
    return api.notifications.manifestNotifications.create({
      token, jwtToken, query
    });
  });
});
