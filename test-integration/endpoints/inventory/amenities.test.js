const assert = require("node:assert/strict");
const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const amenityId = process.env.AMENITY_ID;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => { return `${baseUrl}/inventory`; }
  }
});

describe("inventory/amenities", () => {
  it("should get an Amenity", () => {
    return api.inventory.amenities.get({
      token,
      amenityId
    })
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        assert.ok(data.amenity);
        assert.deepStrictEqual(data.amenity._id, amenityId);
      });
  });

  it("should create an Amenity", () => {
    const newName = "New Name 93";
    const newIcon = "fa-train";
    const newState = false;
    return api.inventory.amenities.create({
      jwtToken,
      token,
      "amenity": {
        "name": newName,
        "icon": newIcon,
        "enabled": newState,
        "lexiconValues": {
          "en-us": newName,
          "es-ar": "spanishName333"
        }
      }
    })
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        assert.ok(data.amenity);
        assert.deepStrictEqual(data.amenity.name, newName);
        assert.deepStrictEqual(data.amenity.icon, newIcon);
        assert.deepStrictEqual(data.amenity.enabled, newState);
        assert.ok(data.amenity.createdAt);
        assert.ok(data.amenity.createdBy);
        assert.ok(data.amenity.updatedAt);
        assert.ok(data.amenity.updatedBy);
      });
  });

  it("should update an Amenity", () => {
    const newName = "New Name 1234";
    const newIcon = "fa-train";
    const newState = false;

    return api.inventory.amenities.update({
      jwtToken,
      token,
      amenityId,
      "amenity": {
        "name": newName,
        "icon": newIcon,
        "enabled": newState,
        "lexiconValues": {
          "en-us": newName,
          "es-ar": "spanishName333"
        }
      }
    })
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        assert.ok(data.amenity);
        assert.deepStrictEqual(data.amenity.name, newName);
        assert.deepStrictEqual(data.amenity.icon, newIcon);
        assert.deepStrictEqual(data.amenity.enabled, newState);
        assert.ok(data.amenity.createdAt);
        assert.ok(data.amenity.createdBy);
        assert.ok(data.amenity.updatedAt);
        assert.ok(data.amenity.updatedBy);
      });
  });
});
