const {
  axiosMock, expectRequest
} = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({
  baseURL: "http://test.com"
});

describe("btrz-pay/datalogic/payments", () => {
  const referenceNumber = "000000000000000000002";
  const internalAuthTokenProvider = {
    getToken: () => {
      return "internalToken";
    }
  };

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a list of payments", () => {
    axiosMock.onGet("/datalogic/payments").reply(expectRequest({
      statusCode: 200,
      internalAuthTokenProvider,
      withoutApiKey: true,
      jwtToken: "internal_auth_token",
      query: {referenceNumber}
    }));

    return api.btrzpay.datalogic.payments.all({
      internalAuthTokenProvider,
      jwtToken: "internal_auth_token",
      query: {referenceNumber}
    });
  });
});

describe("btrz-pay/datalogic/pay", () => {
  const referenceNumber = "000000000000000000002";
  const internalAuthTokenProvider = {
    getToken: () => {
      return "internalToken";
    }
  };

  afterEach(() => {
    axiosMock.reset();
  });

  it("should pay", () => {
    const path = `/datalogic/payments/${referenceNumber}`;
    axiosMock.onPost(path).reply(expectRequest({
      statusCode: 200,
      internalAuthTokenProvider,
      withoutApiKey: true,
      jwtToken: "internal_auth_token",
      query: {referenceNumber}
    }));

    return api.btrzpay.datalogic.payments.update({
      internalAuthTokenProvider,
      jwtToken: "internal_auth_token",
      query: {referenceNumber},
      referenceNumber
    });
  });
});

describe("btrz-pay/datalogic/reverse", () => {
  const referenceNumber = "000000000000000000002";
  const internalAuthTokenProvider = {
    getToken: () => {
      return "internalToken";
    }
  };

  afterEach(() => {
    axiosMock.reset();
  });

  it("should reverse", () => {
    const path = `/datalogic/reverse/${referenceNumber}`;
    axiosMock.onPost(path).reply(expectRequest({
      statusCode: 200,
      internalAuthTokenProvider,
      withoutApiKey: true,
      jwtToken: "internal_auth_token",
      query: {referenceNumber}
    }));

    return api.btrzpay.datalogic.payments.reverse({
      jwtToken: "internal_auth_token",
      query: {referenceNumber},
      referenceNumber,
      internalAuthTokenProvider
    });
  });
});
