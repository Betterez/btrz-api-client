const {
  axiosMock, expectRequest
} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/fare-type-modifiers", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a fare-type modifier", () => {
    axiosMock.onPost("/fare-type-modifiers").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.fareTypeModifiers.create({
      jwtToken,
      token,
      fareTypeModifier: {
        name: "My fare-type modifier"
      }
    });
  });

  it("should get all fare-type modifiers", () => {
    axiosMock.onGet("/fare-type-modifiers").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.fareTypeModifiers.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a fare-type modifier", () => {
    const fareTypeModifierId = "1234";
    axiosMock.onPut(`/fare-type-modifiers/${fareTypeModifierId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.fareTypeModifiers.update({
      jwtToken,
      token,
      fareTypeModifierId,
      fareTypeModifier: {
        name: "My Updated fare-type modifier it"
      }
    });
  });

  it("should get a fare-type modifier", () => {
    const fareTypeModifierId = "1234";
    axiosMock.onGet(`/fare-type-modifiers/${fareTypeModifierId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.fareTypeModifiers.get({
      jwtToken,
      token,
      fareTypeModifierId
    });
  });

  it("should delete a fare-type modifier", () => {
    const fareTypeModifierId = "12345";
    axiosMock.onDelete(`/fare-type-modifiers/${fareTypeModifierId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.fareTypeModifiers.remove({
      jwtToken,
      token,
      fareTypeModifierId
    });
  });
});
