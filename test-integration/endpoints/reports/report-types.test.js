const assert = require("node:assert/strict");
const port = process.env.REPORTS_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    reports: (baseUrl) => { return `${baseUrl}/reports`; }
  }
});

describe("reports/types", () => {
  it("should return 404 for a wrong id", () => {
    const reportTypeId = "reportTypeId";
    return api.reports.reportTypes.get({token, jwtToken, id: reportTypeId})
      .catch((err) => {
        assert.deepStrictEqual(err.response.status, 404);
        assert.deepStrictEqual(err.response.data.code, "TYPE_NOT_FOUND");
        assert.deepStrictEqual(err.response.data.message, "Report type not found");
      });
  });

  it("should return empty success", () => {
    const reportTypeName = "reportTypeName";
    return api.reports.reportTypes.getByName({token, jwtToken, name: reportTypeName})
      .then((result) => {
        assert.deepStrictEqual(result.status, 200);
        assert.deepStrictEqual(result.data, []);
      });
  });
});
