const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/email-templates", () => {
  const token = "someToken";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should GET a list of email templates", () => {
    axiosMock.onGet("/email-templates").reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.accounts.emailTemplates.all({
      token
    });
  });

  it("should GET a list of email templates with query params", () => {
    const query = {type: "order_confirmation", channel: "websales"};
    axiosMock.onGet("/email-templates").reply(expectRequest({
      statusCode: 200,
      token,
      query
    }));
    return api.accounts.emailTemplates.all({
      token,
      query
    });
  });

  it("should GET an email template by id", () => {
    const emailTemplateId = "507f1f77bcf86cd799439011";
    axiosMock.onGet(`/email-templates/${emailTemplateId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.emailTemplates.get({token, jwtToken, emailTemplateId});
  });

  it("should create an email template", () => {
    const data = {name: "My Template", type: "order_confirmation", htmlTemplate: "<p>Hello</p>"};
    axiosMock.onPost("/email-templates").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: data
    }));
    return api.accounts.emailTemplates.create({
      token,
      jwtToken,
      data
    });
  });

  it("should update an email template", () => {
    const emailTemplateId = "507f1f77bcf86cd799439011";
    const data = {name: "Updated Template", type: "order_confirmation", htmlTemplate: "<p>Hi</p>"};
    axiosMock.onPut(`/email-templates/${emailTemplateId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: data
    }));
    return api.accounts.emailTemplates.update({
      token,
      jwtToken,
      emailTemplateId,
      data
    });
  });

  it("should delete an email template", () => {
    const emailTemplateId = "507f1f77bcf86cd799439011";
    axiosMock.onDelete(`/email-templates/${emailTemplateId}`)
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.emailTemplates.remove({
      token,
      jwtToken,
      emailTemplateId
    });
  });

  it("should create a sub email template", () => {
    const mainTemplateId = "507f1f77bcf86cd799439011";
    const agencyId = "507f1f77bcf86cd799439012";
    const data = {mainTemplateId, agencyId};
    axiosMock.onPost("/sub-email-templates").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: data
    }));
    return api.accounts.emailTemplates.createSub({
      token,
      jwtToken,
      mainTemplateId,
      agencyId
    });
  });

  describe("versions", () => {
    it("should update an email template version", () => {
      const emailTemplateId = "507f1f77bcf86cd799439011";
      const versionId = "507f1f77bcf86cd799439013";
      axiosMock.onPut(`/email-templates/${emailTemplateId}/versions/${versionId}`)
        .reply(expectRequest({statusCode: 200, token, jwtToken}));
      return api.accounts.emailTemplates.versions.update({
        token,
        jwtToken,
        emailTemplateId,
        versionId
      });
    });
  });
});
