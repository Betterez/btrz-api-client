const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/fare-classes', () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a fare class", () => {
    axiosMock.onPost(`/fare-classes`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.fareClasses.create({
      jwtToken,
      token,
      fareClass: {
        productIds: ["6789"],
        name: "Economy",
        description: "An inexpensive fare class",
        terms: "Tickets are non-refundable",
        changeable: false,
        cancellable: false,
        disabled: false,
        lexiconKeys: {
          name: "fare-class-name-97ba4o9al2837g0w9",
          description: "fare-class-description-97ba4o9al2837g0w9",
          terms: "fare-class-terms-97ba4o9al2837g0w9",
        }
      }
    });
  });

});