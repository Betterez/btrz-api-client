const { axiosMock, expectRequest } = require("./../../test-helpers"),
  api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("reports/report-types", function() {
  const token = "token",
    jwtToken = "JWT token";
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should get a report type by id", function() {
    const reportTypeId = "reportTypeId";
    axiosMock.onGet(`/types/${reportTypeId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.reports.reportTypes.get({ token, id: reportTypeId });
  });
});
