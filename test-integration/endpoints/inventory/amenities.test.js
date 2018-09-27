const { expect } = require("chai");
const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const amenityId = process.env.AMENITY_ID;

const api = require("./../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});

describe("inventory/amenities", () => {
  it("should get an Amenity", () => {
    return api.inventory.amenities.get({
      token,
      amenityId
    })
    .then(({status, data}) => {
      expect(status).to.equal(200);
      expect(data.amenity).to.exist;
      expect(data.amenity._id).to.eql(amenityId);
    });
  });

  it("should create an Amenity", () => {
    const newName = "New Name 93",
      newIcon = "fa-train",
      newState = false;
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
      expect(status).to.equal(200);
      expect(data.amenity).to.exist;
      expect(data.amenity.name).to.eql(newName);
      expect(data.amenity.icon).to.eql(newIcon);
      expect(data.amenity.enabled).to.eql(newState);
      expect(data.amenity.createdAt).to.exist;
      expect(data.amenity.createdBy).to.exist;
      expect(data.amenity.updatedAt).to.exist;
      expect(data.amenity.updatedBy).to.exist;
    });
  });

  it("should update an Amenity", () => {
    const newName = "New Name 1234",
      newIcon = "fa-train",
      newState = false;

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
        expect(status).to.equal(200);
        expect(data.amenity).to.exist;
        expect(data.amenity.name).to.eql(newName);
        expect(data.amenity.icon).to.eql(newIcon);
        expect(data.amenity.enabled).to.eql(newState);
        expect(data.amenity.createdAt).to.exist;
        expect(data.amenity.createdBy).to.exist;
        expect(data.amenity.updatedAt).to.exist;
        expect(data.amenity.updatedBy).to.exist;
      });
  });
});
