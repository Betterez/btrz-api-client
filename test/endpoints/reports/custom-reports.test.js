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

  it("should get a custom report by id", () => {
    axiosMock.onGet(`/custom-report/${customReportId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.reports.customReports.get({token, jwtToken, customReportId});
  });

  it("should update a custom report", () => {
    const customReport = {
      deliveryMethod: {
        method: "S3",
        options: {bucket: "507f1f77bcf86cd799439011"}
      }
    };
    axiosMock.onPut(`/custom-reports/${customReportId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: {customReport}
    }));
    return api.reports.customReports.update({token, jwtToken, customReportId, customReport});
  });
});
