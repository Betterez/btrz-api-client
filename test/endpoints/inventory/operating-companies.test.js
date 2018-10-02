const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/operating-companies', () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create an operatingCompany", () => {
    axiosMock.onPost(`/operating-companies`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.operatingCompanies.create({
      jwtToken,
      token,
      operatingCompanies: {
        name: "My operatingCompany",
        enabled: true
      }
    });
  });

  it("should get all operatingCompanies", () => {
    axiosMock.onGet(`/operating-companies`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.operatingCompanies.all({
      jwtToken,
      token,
      query: {
        providerIds: "4eb9990bf7885e0100000001"
      }
    });
  });

  it("should update an operatingCompany", () => {
    const operatingCompanyId = "1234";
    axiosMock.onPut(`/operating-companies/${operatingCompanyId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.operatingCompanies.update({
      jwtToken,
      token,
      operatingCompanyId,
      operatingCompany: {
        name: "My Updated operatingCompany",
        enabled: false
      }
    });
  });

  it("should get an operatingCompany", () => {
    const operatingCompanyId = "1234";
    axiosMock.onGet(`/operating-companies/${operatingCompanyId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.operatingCompanies.get({
      jwtToken,
      token,
      operatingCompanyId
    });
  });
});
