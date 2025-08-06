const {
  axiosMock, expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("inventory/items", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should list items", () => {
    axiosMock.onGet("/items").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.items.all({
      token,
      jwtToken
    });
  });

  it("should create a label", () => {
    axiosMock.onPost("/items").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.items.create({
      jwtToken,
      token,
      label: {
        name: "My label"
      }
    });
  });

  it("should create an item", () => {
    axiosMock.onPost("/items").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.items.create({
      jwtToken,
      token,
      item: {
        name: "My item"
      }
    });
  });

  it("should update a item", () => {
    const itemId = "1234";
    axiosMock.onPut(`/items/${itemId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.items.update({
      jwtToken,
      token,
      itemId,
      item: {
        name: "My Updated item it"
      }
    });
  });

  it("should call the sold item ticket update endpoint", () => {
    const soldItemId = "123";
    const ticketId = "456";
    axiosMock.onPut(`/items/${soldItemId}/tickets/${ticketId}`)
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.items.tickets.update({
      jwtToken,
      token,
      soldItemId,
      ticketId
    });
  });
});
