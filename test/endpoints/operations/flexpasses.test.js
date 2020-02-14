const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("operations/flexpasses", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should delete the scan in flexpass with the specified tripId", () => {
    const flexpassId = "1234567890";
    const tripId = "0987654321";

    axiosMock.onDelete(`/flexpasses/${flexpassId}/scannings/${tripId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));

    return api.operations.flexpasses.deleteScanBytripId({
      jwtToken,
      token,
      flexpassId,
      tripId
    });
  });
});
