describe("fetchHttpClient", () => {
  const {expect} = require("chai");
  const http = require("http");
  const FormData = require("form-data");
  const {Response, Headers} = require("undici");
  const {createFetchHttpClient} = require("./../src/fetchHttpClient.js");

  function createServer(handler) {
    const server = http.createServer(handler);
    return new Promise((resolve, reject) => {
      server.listen(0, "127.0.0.1", (err) => {
        if (err) {
          return reject(err);
        }
        const address = server.address();
        return resolve({
          server,
          baseURL: `http://127.0.0.1:${address.port}`
        });
      });
    });
  }

  function closeServer(server) {
    return new Promise((resolve, reject) => {
      server.close((err) => {
        if (err) {
          return reject(err);
        }
        return resolve();
      });
    });
  }

  it("supports request/get/post/put/patch/delete wrappers", async () => {
    const {server, baseURL} = await createServer((req, res) => {
      res.writeHead(200, {"content-type": "application/json"});
      res.end(JSON.stringify({method: req.method, path: req.url}));
    });

    const client = createFetchHttpClient({baseURL});

    const direct = await client({url: "/one", method: "get"});
    const get = await client.get("/two");
    const post = await client.post("/three", {ok: true});
    const put = await client.put("/four", {ok: true});
    const patch = await client.patch("/five", {ok: true});
    const del = await client.delete("/six");

    expect(direct.data.method).to.equal("GET");
    expect(get.data.method).to.equal("GET");
    expect(post.data.method).to.equal("POST");
    expect(put.data.method).to.equal("PUT");
    expect(patch.data.method).to.equal("PATCH");
    expect(del.data.method).to.equal("DELETE");

    await closeServer(server);
  });

  it("serializes params and merges default/request headers", async () => {
    const {server, baseURL} = await createServer((req, res) => {
      res.writeHead(200, {"content-type": "application/json"});
      res.end(JSON.stringify({
        url: req.url,
        trace: req.headers["x-amzn-trace-id"],
        custom: req.headers["x-custom-header"]
      }));
    });

    const client = createFetchHttpClient({
      baseURL,
      headers: {"x-amzn-trace-id": "trace-value"}
    });

    const response = await client.get("/query", {
      params: {
        page: 2,
        enabled: true,
        tags: ["a", "b"]
      },
      headers: {"x-custom-header": "custom-value"}
    });

    expect(response.data.url).to.contain("/query?");
    expect(response.data.url).to.contain("page=2");
    expect(response.data.url).to.contain("enabled=true");
    expect(response.data.url).to.contain("tags%5B%5D=a");
    expect(response.data.url).to.contain("tags%5B%5D=b");
    expect(response.data.trace).to.equal("trace-value");
    expect(response.data.custom).to.equal("custom-value");

    await closeServer(server);
  });

  it("returns arraybuffer and blob response types", async () => {
    const payload = Buffer.from("pdf-bytes");
    const {server, baseURL} = await createServer((req, res) => {
      res.writeHead(200, {"content-type": "application/pdf"});
      res.end(payload);
    });

    const client = createFetchHttpClient({baseURL});
    const asArrayBuffer = await client.get("/binary", {responseType: "arraybuffer"});
    const asBlob = await client.get("/binary", {responseType: "blob"});

    expect(Buffer.from(asArrayBuffer.data)).to.eql(payload);
    expect(asBlob.data).to.have.property("size", payload.length);

    await closeServer(server);
  });

  it("supports validateStatus and maxRedirects = 0", async () => {
    const {server, baseURL} = await createServer((req, res) => {
      if (req.url === "/redirect") {
        res.writeHead(302, {location: "/final"});
        return res.end("");
      }
      res.writeHead(200, {"content-type": "application/json"});
      return res.end(JSON.stringify({ok: true}));
    });

    const client = createFetchHttpClient({baseURL});
    const response = await client.get("/redirect", {
      maxRedirects: 0,
      validateStatus: (status) => {
        return status === 302 || (status >= 200 && status < 300);
      }
    });

    expect(response.status).to.equal(302);
    expect(response.headers.location).to.equal("/final");

    await closeServer(server);
  });

  it("rejects with axios-like error shape on non-2xx", async () => {
    const {server, baseURL} = await createServer((req, res) => {
      res.writeHead(400, {"content-type": "application/json"});
      res.end(JSON.stringify({code: "WRONG_DATA"}));
    });

    const client = createFetchHttpClient({baseURL});

    try {
      await client.get("/boom");
      throw new Error("expected request to fail");
    } catch (error) {
      expect(error.name).to.equal("AxiosError");
      expect(error.isAxiosError).to.equal(true);
      expect(error.code).to.equal("ERR_BAD_REQUEST");
      expect(error.response.status).to.equal(400);
      expect(error.response.data).to.eql({code: "WRONG_DATA"});
      expect(error.config.url).to.equal("/boom");
    }

    await closeServer(server);
  });

  it("rejects with timeout as ECONNABORTED", async () => {
    const {server, baseURL} = await createServer((_req, _res) => {
      // Intentionally no response to force timeout.
    });
    const client = createFetchHttpClient({baseURL, timeout: 50});

    try {
      await client.get("/slow");
      throw new Error("expected timeout");
    } catch (error) {
      expect(error.name).to.equal("AxiosError");
      expect(error.isAxiosError).to.equal(true);
      expect(error.code).to.equal("ECONNABORTED");
      expect(error.message).to.contain("timeout");
    }

    await closeServer(server);
  });

  it("supports form-data payloads without forcing json encoding", async () => {
    const {server, baseURL} = await createServer((req, res) => {
      const chunks = [];
      req.on("data", (chunk) => {
        chunks.push(chunk);
      });
      req.on("end", () => {
        const body = Buffer.concat(chunks).toString("utf8");
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify({
          contentType: req.headers["content-type"],
          hasMultipartBoundary: req.headers["content-type"].includes("multipart/form-data"),
          includesField: body.includes("name=\"field\"") && body.includes("abc")
        }));
      });
    });

    const formData = new FormData();
    formData.append("field", "abc");

    const client = createFetchHttpClient({baseURL});
    const response = await client.post("/upload", formData, {
      headers: formData.getHeaders()
    });

    expect(response.data.hasMultipartBoundary).to.equal(true);
    expect(response.data.includesField).to.equal(true);
    expect(response.data.contentType).to.contain("multipart/form-data");

    await closeServer(server);
  });

  it("uses provided undici dispatcher from agents", async () => {
    let receivedDispatcher = null;
    const fakeDispatcher = {dispatch() {}};
    async function fetchImpl(_url, init) {
      receivedDispatcher = init.dispatcher;
      return new Response("{}", {
        status: 200,
        headers: new Headers({"content-type": "application/json"})
      });
    }

    const client = createFetchHttpClient({
      baseURL: "http://example.com",
      agents: {httpAgent: fakeDispatcher},
      fetchImpl
    });

    await client.get("/anything");
    expect(receivedDispatcher).to.equal(fakeDispatcher);
  });
});
