const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("operations/external-bookins", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create the externalBooking", () => {
    axiosMock.onPost("/external-bookings").reply(expectRequest({statusCode: 200, token, jwtToken}));

    return api.operations.externalBookings.create({
      jwtToken,
      token,
      externalBooking: {}
    });
  });

  it("should delete the externalBooking by the given ticketId", () => {
    const ticketId = "1234567890";

    axiosMock.onDelete(`/external-bookings/${ticketId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));

    return api.operations.externalBookings.remove({
      jwtToken,
      token,
      ticketId
    });
  });
});
