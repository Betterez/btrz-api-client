const {expect} = require("chai");
const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const scheduleGroupId = process.env.SCHEDULE_GROUP_ID;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});

describe("inventory/schedule-groups", () => {
  it("should get an Schedule Group", () => {
    return api.inventory.scheduleGroups.get({
      token,
      scheduleGroupId
    })
      .then(({status, data}) => {
        expect(status).to.equal(200);
        expect(data.scheduleGroup).to.exist;
        expect(data.scheduleGroup._id).to.eql(scheduleGroupId);
      });
  });

  it("should create an Schedule Group", () => {
    const newName = "New Name 97";
    const newColour = "#000017";
    const newState = false;
    return api.inventory.scheduleGroups.create({
      jwtToken,
      token,
      scheduleGroup: {
        name: newName,
        enabled: newState,
        colour: newColour,
        rule: {}
      }
    })
      .then(({status, data}) => {
        expect(status).to.equal(200);
        expect(data.scheduleGroup).to.exist;
        expect(data.scheduleGroup.name).to.eql(newName);
        expect(data.scheduleGroup.enabled).to.eql(newState);
        expect(data.scheduleGroup.colour).to.eql(newColour);
        expect(data.amenityGroup.createdAt).to.exist;
        expect(data.amenityGroup.createdBy).to.exist;
        expect(data.amenityGroup.updatedAt).to.exist;
        expect(data.amenityGroup.updatedBy).to.exist;
      });
  });

  it("should update an Schedule Group", () => {
    const newName = "Schedule Group New Name";
    const newState = false;
    const newColour = "#000044";

    return api.inventory.scheduleGroups.update({
      jwtToken,
      token,
      scheduleGroupId,
      amenityGroup: {
        name: newName,
        colour: newColour,
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
        expect(data.amenityGroup.colour).to.eql(newColour);
        expect(data.amenityGroup.createdAt).to.exist;
        expect(data.amenityGroup.createdBy).to.exist;
        expect(data.amenityGroup.updatedAt).to.exist;
        expect(data.amenityGroup.updatedBy).to.exist;
      });
  });
});
