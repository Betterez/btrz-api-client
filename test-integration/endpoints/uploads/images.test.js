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


describe("uploads/images", () => {
  it("should upload a image file", () => {
    const formData = new FormData(),
      fileStream = fs.createReadStream(`${__dirname}/sample.png`);

    formData.append("file", fileStream);
    return api.uploads.images.create({
      token,
      formData
    })
      .then(({status, data: response}) => {
        expect(status).to.eql(200);
        expect(response.s3Uri).to.match(/https:\/\/s3.amazonaws.com\//);
      });
  });
});
