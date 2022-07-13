const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("operations/passenger-check-in-info", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  // it("should list providers", () => {
  //   axiosMock.onGet("/passenger-check-in-info").reply(expectRequest({statusCode: 200, token, jwtToken}));
  //   return api.operations.passengerCheckInInfo.all({token, jwtToken});
  // });


  it("should return a single provider", () => {
    const id = "12312312312312";
    axiosMock.onGet(`/passenger-check-in-info/${id}`)
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.operations.passengerCheckInInfo.get({token, jwtToken, query: {}, id});
  });

  // it("should create a provider", () => {
  //   axiosMock.onPost("/passenger-check-in-info").reply(expectRequest({statusCode: 200, token, jwtToken}));
  //   return api.operations.passengerCheckInInfo.create({
  //     jwtToken,
  //     token,
  //     data: {
  //       invoiceProviderId: "example",
  //       params: [
  //         {name: "example", value: "value"}
  //       ]
  //     }
  //   });
  // });

  it("should update a provider", () => {
    const providerId = "123123123123";
    const data = {
      information: {firstName: "name"}
    };
    axiosMock.onPut(`/passenger-check-in-info/${providerId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.passengerCheckInInfo.update({jwtToken, token, id: providerId, data});
  });
});
