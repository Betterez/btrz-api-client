const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("accounts/accounts/print-templates", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the print-templates", () => {
    const query = {};

    axiosMock.onGet("/print-templates", {params: query})
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.printTemplates.all({token, query});
  });

  it("should get the a print-templates by ID", () => {
    const query = {};
    const printTemplateId = "printTemplateId";
    axiosMock.onGet(`/print-templates/${printTemplateId}`, {params: query})
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.printTemplates.get({token, query, printTemplateId});
  });

  it("should update a print template", () => {
    const printTemplate = {
      name: "A"
    };
    const printTemplateId = "A";
    axiosMock.onPut(`/print-templates/${printTemplateId}`)
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.printTemplates.update({
      token, jwtToken, printTemplate, printTemplateId
    });
  });

  it("should create a print template", () => {
    const printTemplate = {
      name: "A"
    };

    axiosMock.onPost("/print-templates")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.printTemplates.create({
      token, jwtToken, printTemplate
    });
  });

  it("should delete the print template by id", () => {
    const printTemplateId = "A";
    axiosMock.onDelete(`/print-templates/${printTemplateId}`)
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.printTemplates.remove({
      token, jwtToken, printTemplateId
    });
  });
});
