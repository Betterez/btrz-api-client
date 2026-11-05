const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("accounts/notification-sub-types", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";
  const notificationSubTypeId = "507f1f77bcf86cd799439011";
  const notificationSubType = {
    name: "Weather delay",
    templates: {email: {"en-us": "507f1f77bcf86cd799439012"}}
  };

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET the list of notification sub types", () => {
    axiosMock.onGet("/notification-sub-types").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.notificationSubTypes.all({token, jwtToken});
  });

  it("should GET a notification sub type by id", () => {
    axiosMock.onGet(`/notification-sub-types/${notificationSubTypeId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.notificationSubTypes.get({token, jwtToken, notificationSubTypeId});
  });

  it("should POST a notification sub type as the request body", () => {
    axiosMock.onPost("/notification-sub-types").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: notificationSubType
    }));
    return api.accounts.notificationSubTypes.create({token, jwtToken, notificationSubType});
  });

  it("should PUT a notification sub type as the request body", () => {
    axiosMock.onPut(`/notification-sub-types/${notificationSubTypeId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: notificationSubType
    }));
    return api.accounts.notificationSubTypes.update({token, jwtToken, notificationSubTypeId, notificationSubType});
  });

  it("should DELETE a notification sub type", () => {
    axiosMock.onDelete(`/notification-sub-types/${notificationSubTypeId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.notificationSubTypes.remove({token, jwtToken, notificationSubTypeId});
  });
});
