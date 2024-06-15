const {axiosMock} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("notifications/twilio", () => {
  const token = "my-api-key";
  const jwtToken = "my-jwt";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should post an sms message", () => {
    axiosMock.onPost("/twilio/sms").reply(({headers}) => {
      if (headers["x-api-key"] === token && headers.authorization === `Bearer ${jwtToken}`) {
        return [200];
      }
      return [403];
    });
    const sms = {
      to: "+1234567890",
      from: "+0987654321",
      body: "Hello, World now!"
    };
    return api.notifications.twilio.sms.create({token, jwtToken, sms});
  });

  it("should post a whatsapp message", () => {
    axiosMock.onPost("/twilio/whatsapp").reply(({headers}) => {
      if (headers["x-api-key"] === token && headers.authorization === `Bearer ${jwtToken}`) {
        return [200];
      }
      return [403];
    });
    const whatsapp = {
      to: "+1234567890",
      from: "+0987654321",
      body: "Hello, World!"
    };
    return api.notifications.twilio.whatsapp.create({token, jwtToken, whatsapp});
  });
});
