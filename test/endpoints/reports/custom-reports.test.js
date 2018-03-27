const { axiosMock, expectRequest } = require("./../../test-helpers"),
  api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("reports/custom-reports", () => {
  const token = "token",
    jwtToken = "jwtToken";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a custom report", () => {
    const customReport = {
      name: "customReportName"
    };

    axiosMock.onPost("/custom-reports").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.reports.customReports.create({ jwtToken, token, customReport });
  });
});
