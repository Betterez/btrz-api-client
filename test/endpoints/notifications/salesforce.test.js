const {axiosMock} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("notifications/salesforce", () => {
  const token = "my-api-key";
  const jwtToken = "my-jwt";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should post an sms message", () => {
    axiosMock.onPost("/salesforce/sms").reply(({headers}) => {
      if (headers["x-api-key"] === token && headers.authorization === `Bearer ${jwtToken}`) {
        return [200];
      }
      return [403];
    });
    const sms = {
      phone: "+1234567890",
      message: "Something something something",
      templateType: "order",
      itemId: "12312123"
    };
    return api.notifications.salesforce.sms.create({token, jwtToken, sms});
  });
});
