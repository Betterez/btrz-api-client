const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/document-types", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should list document-types", () => {
    axiosMock.onGet("/document-types").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.documentTypes.all({token, jwtToken});
  });

  it("should create a document-types", () => {
    axiosMock.onPost("/document-types").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.documentTypes.create({
      jwtToken,
      token,
      data: {
        name: "example",
        code: 20,
        ord: 100
      }
    });
  });

  it("should update a document-types", () => {
    const documentTypesId = "123123123123";
    const data = {
      name: "new",
      code: 100,
      ord: 10
    };
    axiosMock.onPut(`/document-types/${documentTypesId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.documentTypes.update({jwtToken, token, id: documentTypesId, data});
  });
});
