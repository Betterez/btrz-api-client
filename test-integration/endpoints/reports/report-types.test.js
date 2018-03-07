const { expect } = require("chai");

const port = process.env.REPORTS_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    reports: (baseUrl) => `${baseUrl}/reports`
  }
});

describe("reports/types", function() {
  it("should return 400 for a wrong id", function() {
    const reportTypeId = "reportTypeId";
    return api.reports.reportTypes.get({ token, jwtToken, id: reportTypeId })
      .catch((err) => {
        expect(err).to.exist;
        expect(err.response.status).to.be.eql(400);
        expect(err.response.data.code).to.be.eql('WRONG_DATA');
        expect(err.response.data.message).to.be.eql('report type ID is not valid');
      });
  });
});
