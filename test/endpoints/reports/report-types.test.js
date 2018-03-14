const { axiosMock, expectRequest } = require("./../../test-helpers"),
  api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("reports/report-types", () => {
  const token = "token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a report type by id", () => {
    const reportTypeId = "reportTypeId";
    axiosMock.onGet(`/types/${reportTypeId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.reports.reportTypes.get({ token, id: reportTypeId });
  });

  it("should get a report type by name", () => {
    const reportTypeName = "reportTypeName";
    axiosMock.onGet(`/types?name=${reportTypeName}`).reply(expectRequest({ statusCode: 200, token }));
    return api.reports.reportTypes.getByName({ token, name: reportTypeName });
  });
});
