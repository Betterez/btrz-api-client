const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});
const id = "1234321";

describe("accounts/dynamic-forms/", () => {
  const token = "someToken";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should GET a list of dynamic forms", () => {
    axiosMock.onGet("/dynamic-forms").reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.accounts.dynamicForms.all({
      token
    });
  });

  it("should GET the dynamic form", () => {
    const dynamicFormId = "123";
    axiosMock.onGet(`/dynamic-forms/${dynamicFormId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.dynamicForms.get({token, jwtToken, dynamicFormId});
  });

  it("should create dynamic form", () => {
    const data = {};
    axiosMock.onPost("/dynamic-forms").reply(expectRequest({statusCode: 200, token, jwtToken, body: data}));
    return api.accounts.dynamicForms.create({
      jwtToken,
      userId: id,
      token,
      data
    });
  });

  it("should update dynamic form field", () => {
    const dynamicFormId = "123";
    const data = {};
    // eslint-disable-next-line max-len
    axiosMock.onPut(`/dynamic-forms/${dynamicFormId}`).reply(expectRequest({statusCode: 200, token, jwtToken, body: data}));
    return api.accounts.dynamicForms.update({
      jwtToken,
      dynamicFormId,
      token,
      data
    });
  });

  it("should delete dynamic form field", () => {
    const dynamicFormId = "123";
    // eslint-disable-next-line max-len
    axiosMock.onDelete(`/dynamic-forms/${dynamicFormId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.dynamicForms.remove({
      jwtToken,
      dynamicFormId,
      token
    });
  });

  describe("accounts/dynamic-forms/fields", () => {
    it("should GET a list of dynamic form fields", () => {
      axiosMock.onGet("/dynamic-forms/fields").reply(expectRequest({
        statusCode: 200,
        token
      }));
      return api.accounts.dynamicForms.fields.all({
        token
      });
    });

    it("should GET the dynamic form field", () => {
      const dynamicFormFieldId = "123";
      axiosMock.onGet(`/dynamic-forms/fields/${dynamicFormFieldId}`)
        .reply(expectRequest({statusCode: 200, token}));
      return api.accounts.dynamicForms.fields.get({token, jwtToken, dynamicFormFieldId});
    });

    it("should create dynamic form field", () => {
      const data = {};
      axiosMock.onPost("/dynamic-forms/fields").reply(expectRequest({statusCode: 200, token, jwtToken, body: data}));
      return api.accounts.dynamicForms.fields.create({
        jwtToken,
        userId: id,
        token,
        data
      });
    });

    it("should update dynamic form field", () => {
      const dynamicFormFieldId = "123";
      const data = {};
      // eslint-disable-next-line max-len
      axiosMock.onPut(`/dynamic-forms/fields/${dynamicFormFieldId}`).reply(expectRequest({statusCode: 200, token, jwtToken, body: data}));
      return api.accounts.dynamicForms.fields.update({
        jwtToken,
        dynamicFormFieldId,
        token,
        data
      });
    });

    it("should delete dynamic form field", () => {
      const dynamicFormFieldId = "123";
      // eslint-disable-next-line max-len
      axiosMock.onDelete(`/dynamic-forms/fields/${dynamicFormFieldId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
      return api.accounts.dynamicForms.fields.remove({
        jwtToken,
        dynamicFormFieldId,
        token
      });
    });
  });
});
