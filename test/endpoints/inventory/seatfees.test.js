const {
  axiosMock, expectRequest
} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/seat-fees", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a seatfee", () => {
    axiosMock.onPost("/seat-fees").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.seatfees.create({
      jwtToken,
      token,
      seatfee: {
        name: "Some seatfee"
      }
    });
  });

  it("should get all the seatfees", () => {
    axiosMock.onGet("/seat-fees").reply(expectRequest({statusCode: 200, token, jwtToken }));
    return api.inventory.seatfees.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a seatfee", () => {
    const seatfeeId = "1234";
    axiosMock.onPut(`/seat-fees/${seatfeeId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.seatfees.update({
      jwtToken,
      token,
      seatfeeId,
      seatfee: {
        name: "My Updated seatfee"
      }
    });
  });

  it("should get a seatfee", () => {
    const seatfeeId = "1234";
    axiosMock.onGet(`/seat-fees/${seatfeeId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.seatfees.get({
      jwtToken,
      token,
      seatfeeId
    });
  });
});
