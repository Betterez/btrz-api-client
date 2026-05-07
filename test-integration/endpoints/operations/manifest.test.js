const assert = require("node:assert/strict");

const port = process.env.OPERATIONS_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    operations: (baseUrl) => { return `${baseUrl}/operations`; }
  }
});

describe("operations/manifest", () => {
  it("should not get a manifest that does not exist", () => {
    const query = {routeId: "51ed2be3cf2c819d00000000", scheduleId: "Morning", date: "2017-08-21"};
    return api.operations.manifest.get({token, jwtToken, query})
      .catch((err) => {
        assert.ok(err);
        assert.deepStrictEqual(err.response.status, 404);
        assert.deepStrictEqual(err.response.data.code, "MANIFEST_NOT_FOUND");
        assert.deepStrictEqual(err.response.data.message, "manifest not found");
      });
  });

  it("should get the manifest", () => {
    const query = {routeId: "51ed2be3cf2c819d5e000010", scheduleId: "Morning", date: "2017-08-21"};
    return api.operations.manifest.get({token, jwtToken, query})
      .then((res) => {
        assert.deepStrictEqual(res.data.manifest._id, "5997315d8efff74052000005");
      });
  });

  it("should get many manifests by specifying a query to retrieve each manifest", async () => {
    const providerId = "52f94137a8663b2704000009";
    const payload = {
      query: [{
        routeId: "5c50e32e62da38d275000001",
        scheduleId: "ef83faaa-b58f-43bb-8c5c-92e2bfa476c0",
        date: "2019-02-27"
      }, {
        routeId: "528cdd9c61c78c2f2d000066",
        scheduleId: "711",
        date: "2020-01-14"
      }]
    };
    const {data: response} = await api.operations.manifest.getMany({token, jwtToken, providerId, data: payload});
    assert.ok(Array.isArray(response));
    assert.strictEqual(response.length, 2);

    // Note: These expectations probably fail even on a successful response.  Edit these once the POST /manifests endpoint is complete.
    assert.deepStrictEqual(response[0].routeId, "5c50e32e62da38d275000001");
    assert.deepStrictEqual(response[0].schedule, "ef83faaa-b58f-43bb-8c5c-92e2bfa476c0");
    // Note: Particularly the date format is probably incorrect
    assert.deepStrictEqual(response[0].date, "2019-02-27");

    assert.deepStrictEqual(response[0].routeId, "528cdd9c61c78c2f2d000066");
    assert.deepStrictEqual(response[0].schedule, "711-b58f-43bb-8c5c-92e2bfa476c0");
    assert.deepStrictEqual(response[0].date, "2020-01-14");
  });

  it("should patch a manifest with add_tickets operation", () => {
    const providerId = "5997315d8efff74052000005";
    const operations = [{op: "add_tickets", tickets: ["576989208f86028739fef256"]}];
    return api.operations.manifest.patch({token, jwtToken, query: {providerId}, operations})
      .then((res) => {
        assert.strictEqual(res.data.results.length, 1);
        assert.deepStrictEqual(res.data.results[0].op, "add_tickets");
        assert.deepStrictEqual(res.data.results[0].status, "success");
      });
  });
});
