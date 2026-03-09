describe("inventory/holidays", () => {
  const {axiosMock, expectRequest} = require("./../../test-helpers.js");
  const api = require("./../../../src/client.js").createApiClient({
    baseURL: "http://test.com"
  });

  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";
  const holidayId = "holiday-id-1";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list holidays", () => {
    const query = {page: 1, providerId: "providerId1"};
    axiosMock.onGet("/holidays").reply(expectRequest({statusCode: 200, token, query}));
    return api.inventory.holidays.all({token, query});
  });

  it("should get a specific holiday by id", () => {
    axiosMock.onGet(`/holidays/${holidayId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.holidays.get({token, jwtToken, holidayId});
  });

  it("should create a new holiday", () => {
    const holiday = {day: 25, month: 12, year: 2024, name: "Christmas"};
    axiosMock.onPost("/holidays").reply(expectRequest({
      statusCode: 200, token, jwtToken, body: {holiday}
    }));
    return api.inventory.holidays.create({jwtToken, token, holiday});
  });

  it("should update an existing holiday", () => {
    const holiday = {day: 26, month: 12, year: 2024, name: "Boxing Day"};
    axiosMock.onPut(`/holidays/${holidayId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken, body: {holiday}
    }));
    return api.inventory.holidays.update({
      jwtToken, token, holiday, holidayId
    });
  });

  it("should delete an existing holiday", () => {
    axiosMock.onDelete(`/holidays/${holidayId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.holidays.remove({jwtToken, token, holidayId});
  });
});
