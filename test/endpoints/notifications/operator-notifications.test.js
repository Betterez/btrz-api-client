const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("notifications/operator-notifications", () => {
  const token = "someToken";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should GET a list of operator notifications with query params", () => {
    const query = {page: 1};
    axiosMock.onGet("/operator-notifications").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      query
    }));
    return api.notifications.operatorNotifications.all({token, jwtToken, query});
  });

  it("should GET an operator notification by id", () => {
    const id = "5f243d100617680712e78dd7";
    axiosMock.onGet(`/operator-notifications/${id}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.notifications.operatorNotifications.get({token, jwtToken, id});
  });

  it("should POST create operator notifications", () => {
    const data = {
      operatorNotification: {
        name: "Alert",
        eventType: "purchase",
        systemName: "email",
        products: [{id: "5f243d100617680712e78dd7", name: "Route"}],
        systemValues: {
          senderName: "Ops",
          senderAddress: "ops@example.com",
          recipients: "a@example.com"
        }
      }
    };
    axiosMock.onPost("/operator-notifications").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: data
    }));
    return api.notifications.operatorNotifications.create({token, jwtToken, data});
  });

  it("should PUT update an operator notification", () => {
    const id = "5f243d100617680712e78dd7";
    const data = {
      operatorNotification: {
        name: "Updated",
        systemValues: {recipients: "b@example.com"}
      }
    };
    axiosMock.onPut(`/operator-notifications/${id}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: data
    }));
    return api.notifications.operatorNotifications.update({token, jwtToken, id, data});
  });

  it("should DELETE an operator notification", () => {
    const id = "5f243d100617680712e78dd7";
    axiosMock.onDelete(`/operator-notifications/${id}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.notifications.operatorNotifications.remove({token, jwtToken, id});
  });
});
