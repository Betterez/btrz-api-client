const {axiosMock} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("notifications/twilio", () => {
  const token = "my-api-key";
  const jwtToken = "my-jwt";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all phone numbers", () => {
    axiosMock.onGet("/twilio/phone-numbers/US").reply(({headers}) => {
      if (headers["x-api-key"] === token && headers.authorization === `Bearer ${jwtToken}`) {
        return [200];
      }
      return [403];
    });
    return api.notifications.twilio.phoneNumbers.all({isocode: "US", token, jwtToken});
  });

  it("should post a phone number", () => {
    axiosMock.onPost("/twilio/phone-numbers").reply(({headers, data}) => {
      const body = JSON.parse(data);
      if (headers["x-api-key"] === token && headers.authorization === `Bearer ${jwtToken}` &&
        body.phoneNumber.name === "Foo" && body.phoneNumber.phoneNumber === "+1234567890") {
        return [200];
      }
      return [403];
    });
    const phoneNumberData = {
      phoneNumber: "+1234567890",
      name: "Foo"
    };
    return api.notifications.twilio.phoneNumbers.create({token, jwtToken, phoneNumberData});
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
      body: "Hello, World now 2!"
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
