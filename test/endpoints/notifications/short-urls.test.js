const assert = require("node:assert/strict");
const {axiosMock} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("notifications/short-urls", () => {
  const token = "my-api-key";
  const jwtToken = "my-jwt";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should POST create short URL with urlData (fullUrl)", () => {
    const urlData = {fullUrl: "https://example.com/path"};
    axiosMock.onPost("/short-urls").reply(({headers, data}) => {
      if (headers["x-api-key"] === token && headers.authorization === `Bearer ${jwtToken}`) {
        const body = JSON.parse(data);
        if (body.urlData && body.urlData.fullUrl === urlData.fullUrl) {
          return [200, {shortUrl: "https://btrz.ca/u/abc123", shortId: "abc123", fullUrl: urlData.fullUrl, createdAt: {}}];
        }
        return [400];
      }
      return [403];
    });
    return api.notifications.shortUrls.create({token, jwtToken, urlData}).then((res) => {
      assert.deepStrictEqual(res.status, 200);
      assert.deepStrictEqual(res.data.shortUrl, "https://btrz.ca/u/abc123");
      assert.deepStrictEqual(res.data.shortId, "abc123");
    });
  });

  it("should POST create short URL with only fullUrl", () => {
    const urlData = {fullUrl: "https://example.com/only"};
    axiosMock.onPost("/short-urls").reply(({_headers, data}) => {
      const body = JSON.parse(data);
      if (body.urlData && body.urlData.fullUrl === urlData.fullUrl && !body.urlData.method) {
        return [200, {shortUrl: "https://btrz.ca/u/xyz", shortId: "xyz", fullUrl: urlData.fullUrl, createdAt: {}}];
      }
      return [400];
    });
    return api.notifications.shortUrls.create({token, jwtToken, urlData}).then((res) => {
      assert.deepStrictEqual(res.status, 200);
      assert.deepStrictEqual(res.data.fullUrl, "https://example.com/only");
    });
  });

  it("should GET resolve shortId (returns 302)", () => {
    axiosMock.onGet("/u/V1StGXR8_Z5j").reply(({headers}) => {
      if (headers["x-api-key"] === token) {
        return [302, {}, {location: "https://example.com/target"}];
      }
      return [401];
    });
    return api.notifications.shortUrls.getByShortId({token, shortId: "V1StGXR8_Z5j", maxRedirects: 0}).then((res) => {
      assert.deepStrictEqual(res.status, 302);
      assert.deepStrictEqual(res.headers.location || res.headers.Location, "https://example.com/target");
    });
  });
});
