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

describe("operations/parcel", () => {
  it("should not get a parcel that does not exist", () => {
    const parcelId = "5967e3da1b7dfb3047e5ac81";
    return api.operations.parcel.get({token, jwtToken, id: parcelId})
      .catch((err) => {
        assert.ok(err);
        assert.deepStrictEqual(err.response.status, 404);
        assert.deepStrictEqual(err.response.data.code, "PARCEL_NOT_FOUND");
        assert.deepStrictEqual(err.response.data.message, "Parcel not found");
      });
  });

  it("should not get any parcel from a trx that does not exist", () => {
    const trxId = "5967e3da1b7dfb3047e5ac81";
    return api.operations.parcel.all({token, jwtToken, query: {trxId}})
      .catch((err) => {
        assert.ok(err);
        assert.deepStrictEqual(err.response.status, 401);
        assert.deepStrictEqual(err.response.data.code, "PARCEL_NOT_FOUND");
        assert.deepStrictEqual(err.response.data.message, "Parcel not found");
      });
  });

  it("should not update parcel that not exists", () => {
    const parcelId = "596e33cea74c7dd74c2f8572";
    const parcel = {_id: parcelId, status: "delivered"};
    const locationData = {latitude: 9876, longitude: 123};
    return api.operations.parcel.update({token, jwtToken, id: parcelId, parcel, locationData})
      .catch((err) => {
        assert.ok(err);
        assert.deepStrictEqual(err.response.status, 404);
        assert.deepStrictEqual(err.response.data.code, "TICKET_NOT_FOUND");
        assert.deepStrictEqual(err.response.data.msg, "parcel not found for id: 596e33cea74c7dd74c2f8572");
      });
  });

  it("should not add a comment in a parcel that not exists", () => {
    const parcelId = "596e33cea74c7dd74c2f8552";
    return api.operations.parcel.addComment({token, jwtToken, id: parcelId, comment: "A comment"})
      .catch((err) => {
        assert.ok(err);
        assert.deepStrictEqual(err.response.status, 404);
        assert.deepStrictEqual(err.response.data.code, "PARCEL_NOT_FOUND");
        assert.deepStrictEqual(err.response.data.msg, "We could not found a Parcel with the given ID");
      });
  });
});
