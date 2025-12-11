const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/fallback-codes", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list fallback codes", () => {
    axiosMock.onGet("/fallback-codes").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.fallbackCodes.all({token});
  });

  it("should list fallback codes with query parameters", () => {
    const query = {
      orderBy: "name",
      orderDir: "asc",
      page: 1
    };
    axiosMock.onGet("/fallback-codes", {params: query}).reply(expectRequest({statusCode: 200, token}));
    return api.inventory.fallbackCodes.all({token, query});
  });

  it("should get a fallback code by id", () => {
    const id = "fallbackCodeId1";
    axiosMock.onGet(`/fallback-code/${id}`).reply(expectRequest({statusCode: 200, token}));
    return api.inventory.fallbackCodes.get({token, id});
  });

  it("should create a fallback code", () => {
    const fallbackCode = {
      name: "newFallbackCode",
      code: "FBC001"
    };

    axiosMock.onPost("/fallback-codes").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.fallbackCodes.create({
      jwtToken,
      token,
      fallbackCode
    });
  });

  it("should update a fallback code", () => {
    const fallbackCodeId = "123123123123";
    const fallbackCode = {
      name: "updatedFallbackCode",
      code: "FBC001"
    };
    axiosMock.onPut(`/fallback-code/${fallbackCodeId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.fallbackCodes.update({jwtToken, token, fallbackCodeId, fallbackCode});
  });
});
