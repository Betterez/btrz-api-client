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

describe("reports/custom-report", () => {
  it("should return 200", () => {
    const customReport = {
      name: "customReportName",
      reportTypeId: "5a99c3055c44c49c5a000001",
      filters: {
        createdAt: "2013/05/05"
      },
      columns: [{name: "Ticket #", prop: "ticketNbr"}],
      deliveryMethod: {
        method: "email",
        options: {
          to: "lucas@betterez.com",
          subject: "Genesis Report"
        }
      },
      deliverySchedule: {
        startDate: {
          value: "2017-12-13T19:15:27.063Z",
          offset: 0
        },
        endDate: {
          value: "2017-12-29T19:15:27.063Z",
          offset: 0
        },
        daysOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        timesOfDay: [
          "13",
          "14"
        ],
        prefixForFile: "greatReport"
      }
    };
    return api.reports.customReports.create({jwtToken, token, customReport})
      .catch((err) => {
        assert.deepStrictEqual(err.response.status, 200);
        assert.deepStrictEqual(err.response.data.customReport.name, customReport.name);
      });
  });

  it("should not get any custom reports", () => {
    return api.reports.customReports.all({token, jwtToken, query: {}})
      .catch((err) => {
        assert.deepStrictEqual(err.response.status, 401);
      });
  });

  it("should not delete a custom report", () => {
    return api.reports.customReports.remove({token, jwtToken, customReportId: "5a959a4aa7114ffd7f000001"})
      .catch((err) => {
        assert.deepStrictEqual(err.response.status, 401);
      });
  });
});
