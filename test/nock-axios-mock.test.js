describe("nock axios facade", () => {
  const {expect} = require("chai");
  const fs = require("fs");
  const path = require("path");
  const os = require("os");
  const axios = require("axios");
  const {createNockAxiosMock} = require("./nock-axios-mock.js");

  it("supports onGet(...).reply(fn) and records request details", async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "btrz-nock-facade-"));
    const recordFilePath = path.join(tempDir, "calls.jsonl");
    const axiosMock = createNockAxiosMock({recordFilePath});

    const client = axios.create({baseURL: "http://test.com"});
    const token = "my-token";

    axiosMock.onGet("/brands", {params: {enabled: "true"}}).reply((config) => {
      expect(config.method).to.equal("get");
      expect(config.headers["x-api-key"]).to.equal(token);
      expect(config.params).to.eql({enabled: "true"});
      return [200, {ok: true}];
    });

    const response = await client.get("/brands", {
      headers: {"x-api-key": token},
      params: {enabled: "true"}
    });

    expect(response.status).to.equal(200);
    expect(response.data).to.eql({ok: true});

    const recordLines = fs.readFileSync(recordFilePath, "utf8")
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        return JSON.parse(line);
      });

    expect(recordLines).to.have.lengthOf(1);
    expect(recordLines[0].method).to.equal("get");
    expect(recordLines[0].uri).to.contain("/brands?enabled=true");

    axiosMock.restore();
  });

  it("supports onPost(..., body).reply(fn)", async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "btrz-nock-facade-"));
    const recordFilePath = path.join(tempDir, "calls.jsonl");
    const axiosMock = createNockAxiosMock({recordFilePath});
    const client = axios.create({baseURL: "http://test.com"});
    const token = "my-token";
    const jwtToken = "my-jwt";
    const bank = {name: "MyBank"};

    axiosMock.onPost("/banks", {bank}).reply((config) => {
      expect(config.data).to.equal(JSON.stringify({bank}));
      expect(config.headers.authorization).to.equal(`Bearer ${jwtToken}`);
      return [200];
    });

    const response = await client.post("/banks", {bank}, {
      headers: {
        "x-api-key": token,
        "authorization": `Bearer ${jwtToken}`
      }
    });
    expect(response.status).to.equal(200);

    axiosMock.restore();
  });

  it("writes artifacts using test file structure by default", async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "btrz-nock-facade-"));
    const axiosMock = createNockAxiosMock({artifactsRootPath: tempDir});
    const client = axios.create({baseURL: "http://test.com"});

    axiosMock.onGet("/suite-structure").reply(() => {
      return [200, {ok: true}];
    });

    await client.get("/suite-structure");

    const expectedRecordFilePath = path.join(tempDir, "nock-axios-mock.test.jsonl");
    const recordLines = fs.readFileSync(expectedRecordFilePath, "utf8")
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        return JSON.parse(line);
      });

    expect(recordLines).to.have.lengthOf(1);
    expect(recordLines[0].uri).to.equal("/suite-structure");
    expect(recordLines[0].suiteTestFilePath).to.contain(`${path.sep}test${path.sep}nock-axios-mock.test.js`);

    axiosMock.restore();
  });
});
