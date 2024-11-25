const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/schedule-groups", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list Schedule Groups", () => {
    axiosMock.onGet("/schedule-groups").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.scheduleGroups.all({token, jwtToken});
  });


  it("should get a Schedule Group", () => {
    const scheduleGroupId = "5ad7804216b426412c19f06f";
    axiosMock.onGet(`/schedule-groups/${scheduleGroupId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.scheduleGroups.get({
      token,
      jwtToken,
      scheduleGroupId
    });
  });

  it("should create an Schedule Group", () => {
    axiosMock.onPost("/schedule-groups").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.scheduleGroups.create({
      jwtToken,
      token,
      scheduleGroup: {
        name: "schedule group name",
        colour: "#1414b8",
        enabled: "true",
        rule: {}
      }
    });
  });

  it("should update an Schedule Group", () => {
    const scheduleGroupId = "5ad7804216b426412c19f06f";
    axiosMock.onPut(`/schedule-groups/${scheduleGroupId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.scheduleGroups.update({
      jwtToken,
      token,
      scheduleGroupId,
      update: {
        name: "updated schedule group name",
        colour: "#1515b8",
        enabled: "true",
        rule: {}
      }
    });
  });
});
