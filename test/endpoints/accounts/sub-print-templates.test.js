const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("accounts/accounts/sub-print-templates", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a sub print template", () => {
    const subPrintTemplate = {
      agencyId: "A",
      mainTemplateId: "abc"
    };

    axiosMock.onPost("/sub-print-templates")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.subPrintTemplates.create({
      token, jwtToken, subPrintTemplate
    });
  });

});
