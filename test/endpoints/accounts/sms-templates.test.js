const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/sms-templates", () => {
  const token = "someToken";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should GET sms template types", () => {
    axiosMock.onGet("/sms-templates/types").reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.accounts.smsTemplates.getTypes({
      token
    });
  });

  it("should GET a list of sms templates", () => {
    axiosMock.onGet("/sms-templates").reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.accounts.smsTemplates.all({
      token
    });
  });

  it("should GET a list of sms templates with query params", () => {
    const query = {type: "order_confirmation", channel: "websales"};
    axiosMock.onGet("/sms-templates").reply(expectRequest({
      statusCode: 200,
      token,
      query
    }));
    return api.accounts.smsTemplates.all({
      token,
      query
    });
  });

  it("should GET an sms template by id", () => {
    const smsTemplateId = "507f1f77bcf86cd799439011";
    axiosMock.onGet(`/sms-templates/${smsTemplateId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.smsTemplates.get({token, jwtToken, smsTemplateId});
  });

  it("should create an sms template", () => {
    const data = {name: "My SMS Template", type: "order_confirmation", txtTemplate: "Hello"};
    axiosMock.onPost("/sms-templates").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: data
    }));
    return api.accounts.smsTemplates.create({
      token,
      jwtToken,
      data
    });
  });

  it("should update an sms template", () => {
    const smsTemplateId = "507f1f77bcf86cd799439011";
    const data = {name: "Updated SMS Template", type: "order_confirmation", txtTemplate: "Hi"};
    axiosMock.onPut(`/sms-templates/${smsTemplateId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: data
    }));
    return api.accounts.smsTemplates.update({
      token,
      jwtToken,
      smsTemplateId,
      data
    });
  });

  it("should delete an sms template", () => {
    const smsTemplateId = "507f1f77bcf86cd799439011";
    axiosMock.onDelete(`/sms-templates/${smsTemplateId}`)
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.smsTemplates.remove({
      token,
      jwtToken,
      smsTemplateId
    });
  });

  it("should create a sub sms template", () => {
    const mainTemplateId = "507f1f77bcf86cd799439011";
    const agencyId = "507f1f77bcf86cd799439012";
    const data = {mainTemplateId, agencyId};
    axiosMock.onPost("/sub-sms-templates").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: data
    }));
    return api.accounts.smsTemplates.createSub({
      token,
      jwtToken,
      mainTemplateId,
      agencyId
    });
  });

  describe("versions", () => {
    it("should update an sms template version", () => {
      const smsTemplateId = "507f1f77bcf86cd799439011";
      const versionId = "507f1f77bcf86cd799439013";
      axiosMock.onPut(`/sms-templates/${smsTemplateId}/versions/${versionId}`)
        .reply(expectRequest({statusCode: 200, token, jwtToken}));
      return api.accounts.smsTemplates.versions.update({
        token,
        jwtToken,
        smsTemplateId,
        versionId
      });
    });
  });
});
