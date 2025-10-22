const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/routes/shedules", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";
  const scheduleId = "cce051a9-0fab-4798-ac57-286b2f1be6a0";
  const routeId = "63a23e9adabe1c068f4d44e1";
  const data = {
    displayName: "Schedule Test",
    fromDateYYYYMMDD: "2018-01-11",
    toDateYYYYMMDD: "2020-12-12",
    capacity: 10,
    legs: [
      {
        fromId: "63a23e07a5bc9f074b443179",
        toId: "63a23e14a5bc9f074b44317a",
        departure: "10:00",
        arrival: "11:25"
      }
    ],
    dow: {
      "monday": "N",
      "tuesday": "N",
      "wednesday": "N",
      "thursday": "N",
      "friday": "Y",
      "saturday": "N",
      "sunday": "N",
      "holidaysIncluded": "N",
      "holidaysOnly": "N"
    }
  };

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all the schedules", () => {
    axiosMock.onGet("/routes/schedules").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.schedules.all({token});
  });

  it("should get a schedule", () => {
    axiosMock.onGet(`/routes/${routeId}/schedules/${scheduleId}`).reply(expectRequest({statusCode: 200, token}));
    return api.inventory.schedules.get({token, routeId, scheduleId});
  });

  it("should create a schedule", () => {
    axiosMock.onPost(`/routes/${routeId}/schedules`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.schedules.create({token, jwtToken, data, routeId});
  });

  it("should update a schedule", async () => {
    axiosMock.onPut(`/routes/${routeId}/schedules/${scheduleId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.schedules.update({token, jwtToken, data, routeId, scheduleId});
  });

  it("should delete a schedule", async () => {
    axiosMock.onDelete(`/routes/${routeId}/schedules/${scheduleId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.schedules.delete({token, jwtToken, routeId, scheduleId});
  });

  it("should add auto bouncing data to the schedules", () => {
    axiosMock.onPost("/routes/schedules/auto-bouncing").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.schedules.autoBouncing.create({token, jwtToken, data});
  });

  it("should delete auto bouncing relationship", async () => {
    axiosMock.onDelete(`/routes/${routeId}/schedules/${scheduleId}/auto-bouncing`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.schedules.autoBouncing.delete({token, jwtToken, routeId, parentScheduleId: scheduleId});
  });

  it("should create a schedule exception", () => {
    axiosMock.onPost(`/schedules/${scheduleId}/schedule-exceptions`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.schedules.exceptions.create({token, jwtToken, data, scheduleId});
  });

  it("should delete a schedule exception", async () => {
    const exceptionId = "exception123";
    axiosMock.onDelete(`/schedules/${scheduleId}/schedule-exceptions/${exceptionId}`)
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.schedules.exceptions.delete({token, jwtToken, scheduleId, exceptionId});
  });

  it("should update a schedule exception", async () => {
    const exceptionId = "exception123";
    axiosMock.onPut(`/schedules/${scheduleId}/schedule-exceptions/${exceptionId}`)
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.schedules.exceptions.update({token, jwtToken, data, scheduleId, exceptionId});
  });
});
