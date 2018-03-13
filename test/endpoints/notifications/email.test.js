const { axiosMock } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('notifications/email', function() {
  const token = "my-api-key";
  const jwtToken = "my-jwt";
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should post an email", function() {
    const query = {
      param1: "param1"
    };
    axiosMock.onPost(`/email`).reply(function({ headers }) {
      if (headers["x-api-key"] === token && headers["authorization"] === `Bearer ${jwtToken}`) {
        return [200];
      }
      return [403];
    });
    return api.notifications.email.create({ token, jwtToken, query });
  });

});
