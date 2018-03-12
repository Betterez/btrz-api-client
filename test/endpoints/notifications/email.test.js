const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('notifications/email', function() {
  const token = "my-api-key";
  
  afterEach(function() {
    axiosMock.reset();
  })

  it("should post an email", function() {
    const query = {
      param1: "param1"
    };
    axiosMock.onPost(`/email`).reply(function({ headers, method }) {
      if (headers["x-api-key"] === token) {
        return [200];
      }
      return [403];
    });
    return api.notifications.email.create({ token, query });
  });

});