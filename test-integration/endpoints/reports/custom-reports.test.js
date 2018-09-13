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

describe("reports/custom-report", function() {
  it("should return 200", function() {
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
    return api.reports.customReports.create({ jwtToken, token, customReport })
    .catch((err) => {
      expect(err.response.status).to.be.eql(200);
      expect(err.response.data.customReport.name).to.be.eql(customReport.name);
    });
  });

  it("should not get any custom reports", function() {
    return api.operations.parcel.all({token, jwtToken, query: {}})
      .catch((err) => {
        expect(err.response.status).to.be.eql(401);
      });
  });
});
