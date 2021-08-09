const {
  axiosMock, expectRequest
} = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("operations/waitlists", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all waitlists", () => {
    axiosMock.onGet("/waitlists").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.operations.waitlists.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should get a waitlist", () => {
    const waitlistId = "1234";
    axiosMock.onGet(`/waitlists/${waitlistId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));

    return api.operations.waitlists.get({
      jwtToken,
      token,
      waitlistId
    });
  });

  it("should create a Waitlist", () => {
    axiosMock.onPost(`/waitlists`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.operations.waitlists.create({
      jwtToken,
      token,
      waitlist: {}
    });
  });

  it("should get delete a waitlist", () => {
    const waitlistId = "1234";
    axiosMock.onDelete(`/waitlists/${waitlistId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));

    return api.operations.waitlists.remove({
      jwtToken,
      token,
      waitlistId
    });
  });
});
