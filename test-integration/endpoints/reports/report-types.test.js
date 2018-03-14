const { expect } = require("chai"),
  port = process.env.REPORTS_API_PORT,
  token = process.env.API_TOKEN,
  jwtToken = process.env.JWT_TOKEN,
  api = require("./../../../src/client").createApiClient({
    baseURL: `http://localhost:${port}`,
    baseURLOverride: {
      reports: (baseUrl) => `${baseUrl}/reports`
    }
  });

describe("reports/types", function() {
  it("should return 404 for a wrong id", function() {
    const reportTypeId = "reportTypeId";
    return api.reports.reportTypes.get({ token, jwtToken, id: reportTypeId })
    .catch((err) => {
      expect(err.response.status).to.be.eql(404);
      expect(err.response.data.code).to.be.eql("TYPE_NOT_FOUND");
      expect(err.response.data.message).to.be.eql("Report type not found");
    });
  });

  it("should return empty success", function() {
    const reportTypeName = "reportTypeName";
    return api.reports.reportTypes.getByName({ token, jwtToken, name: reportTypeName })
      .then((result) => {
        expect(result.status).to.be.eql(200);
        expect(result.data).to.be.eql([]);
      });
  });
});
