const assert = require("node:assert/strict");
const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const amenityGroupId = process.env.AMENITY_GROUP_ID;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => { return `${baseUrl}/inventory`; }
  }
});

describe("inventory/amenity-groups", () => {
  it("should get an Amenity Group", () => {
    return api.inventory.amenityGroups.get({
      token,
      amenityGroupId
    })
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        assert.ok(data.amenityGroup);
        assert.deepStrictEqual(data.amenityGroup._id, amenityGroupId);
      });
  });

  it("should create an Amenity Group", () => {
    const newName = "New Name 97";
    const newState = false;
    return api.inventory.amenityGroups.create({
      jwtToken,
      token,
      amenityGroup: {
        name: newName,
        enabled: newState,
        amenityIds: [],
        lexiconKeys: {}
      }
    })
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        assert.ok(data.amenityGroup);
        assert.deepStrictEqual(data.amenityGroup.name, newName);
        assert.deepStrictEqual(data.amenityGroup.enabled, newState);
        assert.ok(data.amenityGroup.createdAt);
        assert.ok(data.amenityGroup.createdBy);
        assert.ok(data.amenityGroup.updatedAt);
        assert.ok(data.amenityGroup.updatedBy);
      });
  });

  it("should update an Amenity Group", () => {
    const newName = "Amenity Group New Name";
    const newState = false;

    return api.inventory.amenityGroups.update({
      jwtToken,
      token,
      amenityGroupId,
      amenityGroup: {
        name: newName,
        enabled: newState,
        amenityIds: [],
        lexiconKeys: {}
      }
    })
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        assert.ok(data.amenityGroup);
        assert.deepStrictEqual(data.amenityGroup.name, newName);
        assert.deepStrictEqual(data.amenityGroup.enabled, newState);
        assert.ok(data.amenityGroup.createdAt);
        assert.ok(data.amenityGroup.createdBy);
        assert.ok(data.amenityGroup.updatedAt);
        assert.ok(data.amenityGroup.updatedBy);
      });
  });
});
