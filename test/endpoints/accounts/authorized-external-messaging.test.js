const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("accounts/authorized-external-messaging", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET a list of authorized external messaging entries", () => {
    axiosMock.onGet("/authorized-external-messaging").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.authorizedExternalMessaging.all({
      token,
      jwtToken,
      query: {
        page: 1,
        email: "user@"
      }
    });
  });

  it("should GET an authorized external messaging entry by id", () => {
    const authorizedExternalMessagingId = "507f1f77bcf86cd799439011";
    axiosMock.onGet(`/authorized-external-messaging/${authorizedExternalMessagingId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.authorizedExternalMessaging.get({
      token,
      jwtToken,
      authorizedExternalMessagingId
    });
  });

  it("should POST an authorized external messaging entry", () => {
    const authorizedExternalMessaging = {
      email: "reports@example.com",
      reports: true
    };
    axiosMock.onPost("/authorized-external-messaging").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: {authorizedExternalMessaging}
    }));
    return api.accounts.authorizedExternalMessaging.create({
      token,
      jwtToken,
      authorizedExternalMessaging
    });
  });

  it("should PUT an authorized external messaging entry", () => {
    const authorizedExternalMessagingId = "507f1f77bcf86cd799439011";
    const authorizedExternalMessaging = {
      email: "reports@example.com",
      reports: true
    };
    axiosMock.onPut(`/authorized-external-messaging/${authorizedExternalMessagingId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: {authorizedExternalMessaging}
    }));
    return api.accounts.authorizedExternalMessaging.update({
      token,
      jwtToken,
      authorizedExternalMessagingId,
      authorizedExternalMessaging
    });
  });

  it("should DELETE an authorized external messaging entry", () => {
    const authorizedExternalMessagingId = "507f1f77bcf86cd799439011";
    axiosMock.onDelete(`/authorized-external-messaging/${authorizedExternalMessagingId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.authorizedExternalMessaging.remove({
      token,
      jwtToken,
      authorizedExternalMessagingId
    });
  });
});
