const { expect } = require("chai");
const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6IjUxYWY3ZGM5MzFjNzI5Yjc1YzAwMDA4YSIsImVtYWlsIjoic3VzbWl0aGErYmV0dGVyQGJldHRlcmV6LmNvbSIsImlhdCI6MTUzNjg2NTAyNSwiZXhwIjoxNTM3MDM3ODI1LCJhdWQiOiJiZXR0ZXJlei1hcHAiLCJpc3MiOiJidHJ6LWFwaS1hY2NvdW50cyIsInN1YiI6ImFjY291bnRfdXNlcl9zaWduX2luIn0.iMEzVOhk_neLcwSQJV90siFjAYk8IQCTkNfchOdy26sW5QxuLo7Rc1VUMoVKbCBElROBnquU6vQMV_2kvePJkQ";
const amenityId = "5b806c89be89cfe13d3651d3";
// const jwtToken = process.env.JWT_TOKEN;
// const amenityId = process.env.AMENITY_ID;

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
