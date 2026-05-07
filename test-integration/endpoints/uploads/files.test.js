const assert = require("node:assert/strict");
const FormData = require("form-data");
const fs = require("fs");
const jwtToken = process.env.JWT_TOKEN;
const port = process.env.UPLOADS_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    uploads: (baseUrl) => { return `${baseUrl}/uploads`; }
  }
});


describe("uploads/files", () => {
  it("should upload a Journey Prices CSV file", {timeout: 10000}, () => {
    const formData = new FormData();
    const fileStream = fs.createReadStream(`${__dirname}/sample_journey_prices_upload.csv`);

    formData.append("file", fileStream);
    formData.append("type", "journey-prices");
    formData.append("cbType", "email");
    formData.append("cbValue", "noreply@betterez.com");
    return api.uploads.files.upload({
      token,
      jwtToken,
      formData
    })
      .then(({status, data: response}) => {
        assert.deepStrictEqual(status, 200);
        assert.deepStrictEqual(response.type, "journey-prices");
        assert.deepStrictEqual(response.apiKey, token);
        assert.strictEqual(response.dataMapResults.length, 1);
        assert.strictEqual(response.inQueue, true);
      });
  });
});
