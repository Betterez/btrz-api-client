const {
  axiosMock, expectRequest
} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/marketplace-modifiers", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a marketplace modifier", () => {
    axiosMock.onPost("/marketplace-modifiers").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.marketplaceModifiers.create({
      jwtToken,
      token,
      marketPlaceModifier: {
        name: "My marketplace modifier"
      }
    });
  });

  it("should get all marketplace modifiers", () => {
    axiosMock.onGet("/marketplace-modifiers").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.marketplaceModifiers.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a marketplace modifier", () => {
    const marketplaceModifierId = "1234";
    axiosMock.onPut(`/marketplace-modifiers/${marketplaceModifierId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.marketplaceModifiers.update({
      jwtToken,
      token,
      marketplaceModifierId,
      marketPlaceModifier: {
        name: "My Updated marketplace modifier it"
      }
    });
  });

  it("should get a marketplace modifier", () => {
    const marketplaceModifierId = "1234";
    axiosMock.onGet(`/marketplace-modifiers/${marketplaceModifierId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.marketplaceModifiers.get({
      jwtToken,
      token,
      marketplaceModifierId
    });
  });

  it("should delete a marketplace modifier", () => {
    const marketplaceModifierId = "1234";
    axiosMock.onDelete(`/marketplace-modifiers/${marketplaceModifierId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.marketplaceModifiers.remove({
      jwtToken,
      token,
      marketplaceModifierId
    });
  });
});
