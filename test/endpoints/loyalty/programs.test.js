const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("loyalty/programs", () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(function() {
    axiosMock.restore();
  });

  it("should list programs", () => {
    axiosMock.onGet("/programs").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.loyalty.programs.all({token, jwtToken})
  });

  it("should create a program", () => {
    axiosMock.onPost(`/programs`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.loyalty.programs.create({
      jwtToken,
      token,
      program: {
        accumulateOn: "redemption",
        disabled: false,
        expirationDays: 20,
        name: "A Program",
        terms: "Loyalty program terms",
        paymentMethods: ["cash"],
        products: ["123123123"]
      }
    });
  });

  it("should PUT a program", function() {
    const programId = "123123123123",
      program =  {
        accumulateOn: "redemption",
        disabled: false,
        expirationDays: 20,
        name: "An updated program",
        terms: "Updated Loyalty program terms",
        paymentMethods: ["cash"],
        products: ["123123123"]
      };
    axiosMock.onPut(`/programs/${programId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.loyalty.programs.put({ jwtToken, token, programId, program });
  });
});
