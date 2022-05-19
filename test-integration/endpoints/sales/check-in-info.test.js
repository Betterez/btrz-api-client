const {matchHeaders, statusCode} = require("./../../test-integration-helpers");
const apiClient = require("./../../../src/client");

describe("sales/check-in", () => {
  const port = process.env.SALES_API_PORT;
  const token = process.env.API_TOKEN;
  const api = apiClient.createApiClient({
    baseURL: `http://localhost:${port}`,
    baseURLOverride: {
      sales: (baseUrl) => { return `${baseUrl}/sales`; }
    }
  });

  it("should get a passenger checkIn information by id", () => {
    const checkInId = "623e0fb117e273dc4323e3e6";

    return api.sales.checkInInfo.get({token, id: checkInId})
      .then(matchHeaders("x-api-key"))
      .then(statusCode(200));
  });
});
