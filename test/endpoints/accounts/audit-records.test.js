const assert = require("node:assert/strict");
const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/audit-records", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET audit records by providerId, folder, and itemId", () => {
    const providerId = "507f1f77bcf86cd799439011";
    const folder = "fares";
    const itemId = "64f1aaaaaaaaaaaaaaaaaaaa";
    const auditRecord = {
      accountId: providerId,
      folder,
      objectId: itemId,
      events: [{
        ts: "2026-08-14T08:03:12.123Z",
        userId: "user-1",
        operation: "update",
        changes: [{path: "name", from: "A", to: "B"}]
      }]
    };

    axiosMock.onGet(`/audit-records/${providerId}/${folder}/${itemId}`)
      .reply((config) => {
        const result = expectRequest({
          statusCode: 200,
          token,
          jwtToken,
          requireJwtTokenOnGet: true
        })(config);
        if (result[0] !== 200) {
          return result;
        }
        return [200, auditRecord];
      });

    return api.accounts.auditRecords.get({
      token,
      jwtToken,
      providerId,
      folder,
      itemId
    }).then((res) => {
      assert.deepStrictEqual(res.status, 200);
      assert.deepStrictEqual(res.data, auditRecord);
    });
  });
});
