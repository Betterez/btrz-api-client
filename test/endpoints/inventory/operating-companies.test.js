const { axiosMock, expectRequest } = require("./../../test-helpers");
const {expect} = require("chai");
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

  it("should create an operating company sequence", () => {
    const operatingCompanyId = "1234";
    const operatingCompanySequenceData = {};
    // eslint-disable-next-line max-len
    axiosMock.onPost(`/operating-companies/${operatingCompanyId}/sequences`).reply(expectRequest({statusCode: 200, token, jwtToken, body: operatingCompanySequenceData}));
    return api.inventory.operatingCompanies.sequences.create({
      jwtToken,
      token,
      operatingCompanyId,
      sequence: operatingCompanySequenceData
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should get operating company sequences", () => {
    const operatingCompanyId = "1234";
    axiosMock.onGet(`/operating-companies/${operatingCompanyId}/sequences`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.operatingCompanies.sequences.all({
      jwtToken,
      token,
      operatingCompanyId
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should get operating company sequence by id", () => {
    const operatingCompanyId = "1234";
    const sequenceId = "5678";
    // eslint-disable-next-line max-len
    axiosMock.onGet(`/operating-companies/${operatingCompanyId}/sequences/${sequenceId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.operatingCompanies.sequences.get({
      jwtToken,
      token,
      operatingCompanyId,
      sequenceId
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should update operating company sequence", () => {
    const operatingCompanyId = "1234";
    const sequenceId = "5678";
    const operatingCompanySequenceData = {};
    // eslint-disable-next-line max-len
    axiosMock.onPut(`/operating-companies/${operatingCompanyId}/sequences/${sequenceId}`).reply(expectRequest({statusCode: 200, token, jwtToken, body: operatingCompanySequenceData}));
    return api.inventory.operatingCompanies.sequences.update({
      jwtToken,
      token,
      operatingCompanyId,
      sequenceId,
      sequence: operatingCompanySequenceData
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });
});
