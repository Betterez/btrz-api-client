describe("undici fetch mock facade", () => {
  const {expect} = require("chai");
  const fs = require("fs");
  const path = require("path");
  const os = require("os");
  const {createUndiciFetchMock} = require("./undici-fetch-mock.js");
  const {createApiClient} = require("./../src/client.js");

  it("intercepts fetch client GET requests and records per-suite artifact", async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "btrz-undici-facade-"));
    const fetchMock = createUndiciFetchMock({artifactsRootPath: tempDir});
    const api = createApiClient({baseURL: "http://test.com", httpClient: "fetch"});

    fetchMock.onGet("/brands").reply((config) => {
      expect(config.method).to.equal("get");
      expect(config.headers["x-api-key"]).to.equal("token123");
      expect(config.params).to.eql({enabled: "true"});
      return [200, {ok: true}];
    });

    const response = await api.inventory.brands.all({
      token: "token123",
      query: {enabled: "true"}
    });

    expect(response.status).to.equal(200);
    expect(response.data).to.eql({ok: true});

    const expectedRecordFilePath = path.join(tempDir, "undici-fetch-mock.test.jsonl");
    const recordLines = fs.readFileSync(expectedRecordFilePath, "utf8")
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        return JSON.parse(line);
      });

    expect(recordLines).to.have.lengthOf(1);
    expect(recordLines[0].uri).to.contain("/brands?enabled=true");

    fetchMock.restore();
  });

  it("intercepts fetch client POST requests", async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "btrz-undici-facade-"));
    const recordFilePath = path.join(tempDir, "calls.jsonl");
    const fetchMock = createUndiciFetchMock({recordFilePath});
    const api = createApiClient({baseURL: "http://test.com", httpClient: "fetch"});

    fetchMock.onPost("/banks").reply((config) => {
      expect(config.data).to.equal(JSON.stringify({bank: {name: "A"}}));
      expect(config.headers.authorization).to.equal("Bearer jwt123");
      return [200, {ok: true}];
    });

    const response = await api.inventory.banks.create({
      token: "token123",
      jwtToken: "jwt123",
      bank: {name: "A"}
    });

    expect(response.status).to.equal(200);
    fetchMock.restore();
  });
});
