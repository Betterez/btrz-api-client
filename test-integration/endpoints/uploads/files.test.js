const { expect } = require("chai");
const FormData = require("form-data");
const fs = require("fs");

const port = process.env.UPLOADS_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    uploads: (baseUrl) => `${baseUrl}/uploads`
  }
});


describe("uploads/files", () => {
  it("should upload a Journey Prices CSV file", () => {
    const formData = new FormData(),
      fileStream = fs.createReadStream(`${__dirname}/sample_journey_prices_upload.csv`);

    formData.append("file", fileStream);
    formData.append("type", "journey-prices");
    formData.append("cbType", "email");
    formData.append("cbValue", "noreply@betterez.com");

    return api.uploads.files.upload({
      token,
      formData
    })
      .then(({status, data: response}) => {
        expect(status).to.eql(200);
        expect(response.type).to.eql("journey-prices");
        expect(response.apiKey).to.equal(token);
        expect(response.dataMapResults).to.have.length(1);
        expect(response.inQueue).to.be.true;
      })
  });
});