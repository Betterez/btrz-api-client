const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/promo-campaign-calendar", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";
  const promoCampaignCalendar = {campaign: "Summer 2026", excludedTravelDates: ["2026-12-24", "2026-12-31"]};

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the calendar of a campaign", () => {
    axiosMock.onGet("/promo-campaign-calendar", {params: {campaign: "Summer 2026"}})
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.promoCampaignCalendar.get({token, jwtToken, campaign: "Summer 2026"});
  });

  it("should update the calendar of a campaign", () => {
    axiosMock.onPut("/promo-campaign-calendar", {promoCampaignCalendar})
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.promoCampaignCalendar.update({token, jwtToken, promoCampaignCalendar});
  });
});
