describe("accounts/shift/user", () => {
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
});
