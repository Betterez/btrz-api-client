const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("reports/custom-reports", () => {
  const token = "token";
  const jwtToken = "jwtToken";
  const customReportId = "5a959a4aa7114ffd7f000001";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a custom report", () => {
    const customReport = {
      name: "customReportName"
    };

    axiosMock.onPost("/custom-reports").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.reports.customReports.create({jwtToken, token, customReport});
  });

  it("should get all the custom reports", () => {
    axiosMock.onGet("/custom-reports").reply(expectRequest({statusCode: 200, token}));
    return api.reports.customReports.all({token, query: {}});
  });

  it("should remove custom report with given id", () => {
    axiosMock.onDelete(`/custom-reports/${customReportId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.reports.customReports.remove({jwtToken, token, customReportId});
  });
});
