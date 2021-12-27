const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/marital-status", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should list marital-status", () => {
    axiosMock.onGet("/marital-status").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.maritalStatus.all({token, jwtToken});
  });

  it("should create a marital-status", () => {
    axiosMock.onPost("/marital-status").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.maritalStatus.create({
      jwtToken,
      token,
      data: {
        name: "example",
        ord: 100
      }
    });
  });

  it("should update a marital-status", () => {
    const maritalStatusId = "123123123123";
    const data = {
      name: "new",
      ord: 10
    };
    axiosMock.onPut(`/marital-status/${maritalStatusId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.maritalStatus.update({jwtToken, token, id: maritalStatusId, data});
  });
});
