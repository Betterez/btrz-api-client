const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("webhooks/", () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(function() {
    axiosMock.restore();
  });

  it("should emit a webhook", () => {
    axiosMock.onPost(`/emit`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.webhooks.webhooks.emit({
      jwtToken,
      token,
      webhook: {
        id: "5d4c7e96135a4f9b05d37ba2",
        event: "transaction.completed", 
        url: "https://httpbin.org/post"
      }
    });
  });
});
