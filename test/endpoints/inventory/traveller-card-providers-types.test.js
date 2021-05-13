const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/traveller-cards-providers-types", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should call the traveller cards providers types endpoint", async () => {
    axiosMock.onGet("/traveller-cards-providers/types").reply(expectRequest({statusCode: 200, token}));
    api.inventory.travellerCardProvidersTypes.all({token});
  });
});
