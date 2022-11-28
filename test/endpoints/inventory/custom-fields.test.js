/* eslint-disable import/extensions */
const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/custom-fields", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list custom fields", () => {
    axiosMock.onGet("/custom-fields").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.customFields.all({token});
  });

  it("should get a custom field by id", () => {
    const fieldId = "fieldId";
    axiosMock.onGet(`/custom-fields/${fieldId}`).reply(expectRequest({statusCode: 200, token}));
    return api.inventory.customFields.get({token, fieldId});
  });

  it("should create a custom field", () => {
    axiosMock.onPost("/custom-fields").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.customFields.create({
      jwtToken,
      token,
      data: {
        text: "field"
      }
    });
  });

  it("should update a custom fields", () => {
    const fieldId = "123123123123";
    const data = {
      text: "newField"
    };
    axiosMock.onPut(`/custom-fields/${fieldId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.customFields.update({jwtToken, token, fieldId, data});
  });
});
