const {expect} = require("chai");
const {axiosMock} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com/reports"});

describe("reports/email", () => {
  const token = "my-api-key";
  const jwtToken = "my-jwt";
  const report = {
    "db": "reports",
    "dataSource": "reports",
    "emails": [
      "myEmail@betterez.com"
    ],
    "sender": "myEmail@betterez.com",
    "subject": "this is a test email",
    "collectionName": "zone_prices",
    "filters": {},
    "columns": [
      {"name": "ID", "prop": "_id"},
      {"name": "SERVICE_TYPE_IDS", "prop": "serviceTypeIds"},
      {"name": "DEPARTURE_ZONES", "prop": "departureZones"},
      {"name": "ARRIVAL_ZONES", "prop": "arrivalZones"},
      {"name": "MIN_WEIGHT", "prop": "minWeight"},
      {"name": "MAX_WEIGHT", "prop": "maxWeight"},
      {"name": "MIN_VOLUME", "prop": "minVolume"},
      {"name": "MAX_VOLUME", "prop": "maxVolume"},
      {"name": "PRICE", "prop": "price"}
    ],
    "avalilableColumns": [
      "_id",
      "serviceTypeIds",
      "departureZones",
      "arrivalZones",
      "minWeight",
      "maxWeight",
      "minVolume",
      "maxVolume",
      "price"
    ],
    "accountId": "someAccountId",
    "reportId": "zone-prices"
  };
  afterEach(() => {
    axiosMock.reset();
  });
  describe("sendReportEmail", () => {
    it("should POST a report email", () => {
      axiosMock.onPost("/email").reply((config) => {
        expect(config.data).to.be.eql(JSON.stringify(report));
        expect(config.headers.authorization).to.be.eql(`Bearer ${jwtToken}`);
        const response = {
          email: report.sender
        };
        return [200, response];
      });

      return api.reports.reportEmail.post({token, jwtToken, report});
    });
  });
});
