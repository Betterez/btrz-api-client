describe("accounts/shifts", () => {
  const {
    axiosMock,
    expectRequest
  } = require("./../../test-helpers.js");
  const api = require("./../../../src/client.js").createApiClient({
    baseURL: "http://test.com"
  });

  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all shifts", () => {
    const query = {status: "closed"};
    axiosMock.onGet("/shifts").reply(expectRequest({statusCode: 200, token, jwtToken, query}));
    return api.accounts.shifts.all({token, jwtToken, query});
  });

  it("should get shift", () => {
    const userId = "userId1";
    axiosMock.onGet(`/shift/user/${userId}`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.get({token, userId});
  });

  it("should create the shift", () => {
    const shiftData = {};
    axiosMock.onPost("/shifts").reply(expectRequest({statusCode: 200, token, jwtToken, body: shiftData}));
    return api.accounts.shifts.create({
      jwtToken,
      token,
      shiftData
    });
  });

  it("should update the shift", () => {
    const shiftId = "1234";
    const operations = {hjhj: "1"};
    const query = {something: true};
    axiosMock.onPatch(`/shifts/${shiftId}`).reply(expectRequest({statusCode: 200, token, jwtToken, body: {operations}, query}));
    return api.accounts.shifts.update({
      jwtToken,
      token,
      shiftId,
      operations,
      query
    });
  });

  it("should get all shifts/location-closures", () => {
    const query = {status: "closed"};
    axiosMock.onGet("/shifts/location-closures").reply(expectRequest({statusCode: 200, token, jwtToken, query}));
    return api.accounts.shifts.locationClosures.all({token, jwtToken, query});
  });

  it("should get shifts-location-closures", () => {
    const locationClosureId = "locationClosure1";
    axiosMock.onGet(`/shifts/location-closures/${locationClosureId}`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.locationClosures.get({token, locationClosureId});
  });

  it("should create the shift-location-closure", () => {
    const locationClosure = {};
    axiosMock.onPost("/shifts/location-closures").reply(expectRequest({statusCode: 200, token, jwtToken, body: locationClosure}));
    return api.accounts.shifts.locationClosures.create({
      jwtToken,
      token,
      locationClosure
    });
  });

  it("should create the shift-location-closure comment", () => {
    const locationClosureId = "locationClosure1";
    const locationClosureComment = {};
    axiosMock.onPost(`/shifts/location-closures/${locationClosureId}/comments`)
      .reply(expectRequest({statusCode: 200, token, jwtToken, body: locationClosureComment}));
    return api.accounts.shifts.locationClosures.comments.create({
      jwtToken,
      token,
      locationClosureId,
      locationClosureComment
    });
  });

  it("should get the shift payments", () => {
    const shiftId = "shiftId1";
    axiosMock.onGet(`/shifts/${shiftId}/payments`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.payments.get({token, jwtToken, shiftId});
  });

  it("should get the shift transactions", () => {
    const shiftId = "shiftId1";
    axiosMock.onGet(`/shifts/${shiftId}/transactions`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.transactions.get({token, jwtToken, shiftId});
  });

  it("should get the shift tickets", () => {
    const shiftId = "shiftId1";
    axiosMock.onGet(`/shifts/${shiftId}/tickets`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.tickets.get({token, jwtToken, shiftId});
  });

  it("should get the shift fees", () => {
    const shiftId = "shiftId1";
    axiosMock.onGet(`/shifts/${shiftId}/fees`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.fees.get({token, jwtToken, shiftId});
  });

  it("should get the shift refunds", () => {
    const shiftId = "shiftId1";
    axiosMock.onGet(`/shifts/${shiftId}/refunds`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.refunds.get({token, jwtToken, shiftId});
  });

  it("should get the shift items", () => {
    const shiftId = "shiftId1";
    axiosMock.onGet(`/shifts/${shiftId}/items`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.items.get({token, jwtToken, shiftId});
  });

  it("should get the shift redeemable items", () => {
    const shiftId = "shiftId1";
    axiosMock.onGet(`/shifts/${shiftId}/redeemable-items`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.redeemableItems.get({token, jwtToken, shiftId});
  });

  it("should get the shift gift certificates", () => {
    const shiftId = "shiftId1";
    axiosMock.onGet(`/shifts/${shiftId}/gift-certificates`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.giftCertificates.get({token, jwtToken, shiftId});
  });

  it("should get the shift parcels", () => {
    const shiftId = "shiftId1";
    axiosMock.onGet(`/shifts/${shiftId}/parcels`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.parcels.get({token, jwtToken, shiftId});
  });

  it("should get the shift insurances", () => {
    const shiftId = "shiftId1";
    axiosMock.onGet(`/shifts/${shiftId}/insurances`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.insurances.get({token, jwtToken, shiftId});
  });

  it("should get the shift invoices", () => {
    const shiftId = "shiftId1";
    axiosMock.onGet(`/shifts/${shiftId}/invoices`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.invoices.get({token, jwtToken, shiftId});
  });

  it("should get the shift deposits", () => {
    const shiftId = "shiftId1";
    axiosMock.onGet(`/shifts/${shiftId}/deposits`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.deposits.get({token, jwtToken, shiftId});
  });

  it("should create the shift deposit", () => {
    const shiftId = "shiftId1";
    const deposit = {};
    axiosMock.onPost(`/shifts/${shiftId}/deposits`).reply(expectRequest({statusCode: 200, token, jwtToken, body: deposit}));
    return api.accounts.shifts.deposits.create({token, jwtToken, shiftId, deposit});
  });

  it("should get the shift manual tickets", () => {
    const shiftId = "shiftId1";
    axiosMock.onGet(`/shifts/${shiftId}/manual-tickets`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.shifts.manualTickets.get({token, jwtToken, shiftId});
  });

  it("should create the shift manual tickets", () => {
    const shiftId = "shiftId1";
    const manualTicket = {};
    axiosMock.onPost(`/shifts/${shiftId}/manual-tickets`).reply(expectRequest({statusCode: 200, token, jwtToken, body: manualTicket}));
    return api.accounts.shifts.manualTickets.create({token, jwtToken, shiftId, manualTicket});
  });

  it("should create the shift starting balance", () => {
    const shiftId = "shiftId1";
    const startingBalance = {};
    axiosMock.onPost(`/shifts/${shiftId}/starting-balance`).reply(expectRequest({statusCode: 200, token, jwtToken, body: startingBalance}));
    return api.accounts.shifts.startingBalances.create({token, jwtToken, shiftId, startingBalance});
  });

  it("should get the shift purchase limit payments", () => {
    const locationId = "locationId1";
    const query = {day: "2020-01-01"};
    axiosMock.onGet(`/shifts/${locationId}/purchase-limit-payments`).reply(expectRequest({statusCode: 200, token, query}));
    return api.accounts.shifts.purchaseLimitPayments.get({token, jwtToken, locationId, query});
  });

  it("should get the shift sales Summary", () => {
    const shiftId = "shiftId";
    const query = {depositable: false};
    axiosMock.onGet(`/shifts/${shiftId}/sales-summary`).reply(expectRequest({statusCode: 200, token, query}));
    return api.accounts.shifts.salesSummary.get({token, jwtToken, shiftId, query});
  });
});

