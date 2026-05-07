const assert = require("node:assert/strict");
const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const scheduleGroupId = process.env.SCHEDULE_GROUP_ID;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => { return `${baseUrl}/inventory`; }
  }
});

describe("inventory/schedule-groups", () => {
  it("should get an Schedule Group", () => {
    return api.inventory.scheduleGroups.get({
      token,
      jwtToken,
      scheduleGroupId
    })
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        assert.ok(data.scheduleGroup);
        assert.deepStrictEqual(data.scheduleGroup._id, scheduleGroupId);
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
        assert.deepStrictEqual(status, 200);
        assert.ok(data.scheduleGroup);
        assert.deepStrictEqual(data.scheduleGroup.name, newName);
        assert.deepStrictEqual(data.scheduleGroup.enabled, newState);
        assert.deepStrictEqual(data.scheduleGroup.colour, newColour);
        assert.ok(data.amenityGroup.createdAt);
        assert.ok(data.amenityGroup.createdBy);
        assert.ok(data.amenityGroup.updatedAt);
        assert.ok(data.amenityGroup.updatedBy);
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
        assert.deepStrictEqual(status, 200);
        assert.ok(data.amenityGroup);
        assert.deepStrictEqual(data.amenityGroup.name, newName);
        assert.deepStrictEqual(data.amenityGroup.enabled, newState);
        assert.deepStrictEqual(data.amenityGroup.colour, newColour);
        assert.ok(data.amenityGroup.createdAt);
        assert.ok(data.amenityGroup.createdBy);
        assert.ok(data.amenityGroup.updatedAt);
        assert.ok(data.amenityGroup.updatedBy);
      });
  });
});
