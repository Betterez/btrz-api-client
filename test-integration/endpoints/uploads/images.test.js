const assert = require("node:assert/strict");
const FormData = require("form-data");
const fs = require("fs");

const port = process.env.UPLOADS_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    uploads: (baseUrl) => {
      return `${baseUrl}/uploads`;
    }
  }
});


describe("uploads/images", () => {
  it("should upload a image file", () => {
    const formData = new FormData();
    const fileStream = fs.createReadStream(`${__dirname}/sample.png`);

    formData.append("file", fileStream);
    return api.uploads.images.create({
      token,
      formData
    })
      .then(({status, data: response}) => {
        assert.deepStrictEqual(status, 200);
        assert.match(response.s3Uri, /https:\/\/s3.amazonaws.com\//);
      });
  });
});
