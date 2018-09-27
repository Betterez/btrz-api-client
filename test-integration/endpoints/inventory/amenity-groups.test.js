const { expect } = require("chai");
const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const amenityGroupId = process.env.AMENITY_GROUP_ID;

const api = require("./../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});

describe("inventory/amenity-groups", () => {
  it("should get an Amenity Group", () => {
    return api.inventory.amenityGroups.get({
      token,
      amenityGroupId
    })
    .then(({status, data}) => {
      expect(status).to.equal(200);
      expect(data.amenityGroup).to.exist;
      expect(data.amenityGroup._id).to.eql(amenityGroupId);
    });
  });

  it("should create an Amenity Group", () => {
    const newName = "New Name 97",
      newIcon = "fa-train",
      newState = false;
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
      expect(status).to.equal(200);
      expect(data.amenityGroup).to.exist;
      expect(data.amenityGroup.name).to.eql(newName);
      expect(data.amenityGroup.enabled).to.eql(newState);
      expect(data.amenityGroup.createdAt).to.exist;
      expect(data.amenityGroup.createdBy).to.exist;
      expect(data.amenityGroup.updatedAt).to.exist;
      expect(data.amenityGroup.updatedBy).to.exist;
    });
  });

  it("should update an Amenity Group", () => {
    const newName = "Amenity Group New Name",
      newState = false;

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
        expect(status).to.equal(200);
        expect(data.amenityGroup).to.exist;
        expect(data.amenityGroup.name).to.eql(newName);
        expect(data.amenityGroup.enabled).to.eql(newState);
        expect(data.amenityGroup.createdAt).to.exist;
        expect(data.amenityGroup.createdBy).to.exist;
        expect(data.amenityGroup.updatedAt).to.exist;
        expect(data.amenityGroup.updatedBy).to.exist;
      });
  });
});
