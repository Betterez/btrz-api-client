const {axiosMock} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("notifications/email", () => {
  const token = "my-api-key";
  const jwtToken = "my-jwt";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should post an email", () => {
    const query = {
      param1: "param1"
    };
    axiosMock.onPost("/email").reply(({headers}) => {
      if (headers["x-api-key"] === token && headers.authorization === `Bearer ${jwtToken}`) {
        return [200];
      }
      return [403];
    });
    return api.notifications.email.create({token, jwtToken, query});
  });
});
