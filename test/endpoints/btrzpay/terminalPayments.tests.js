const {expect} = require("chai");
const {
  axiosMock, expectRequest
} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("btrzpay/terminal-payments", () => {
  afterEach(() => {
    axiosMock.reset();
  });

  describe("MIT terminal payments", () => {
    const token = "token";
    const jwtToken = "I owe you a JWT token";
    const query = {providerId: "123"};

    it("should update a MIT terminal payment", () => {
      axiosMock.onPut("/terminal-payments/mit/1").reply(expectRequest({
        statusCode: 200, token, jwtToken, query
      }));
      return api.btrzpay.terminalPayments.mit.update({
        token,
        jwtToken,
        query,
        id: 1,
        terminalPayment: {
          referenceNumber: "1",
          result: {
            id: "1",
            paymentStatus: "CONFIRMED"
          }
        }
      });
    });

    it("should get the MIT terminal payment", () => {
      axiosMock.onGet("/terminal-payments/mit/1", {params: query}).reply(expectRequest({
        statusCode: 200, token, jwtToken, query
      }));
      return api.btrzpay.terminalPayments.mit.get({
        token,
        jwtToken,
        query,
        id: 1
      });
    });
  });

  describe("Webhooks", () => {
    it("should process a webhook from Getnet", () => {
      const providerId = "5ad7804216b426412c19f06f";
      const webhookData = {
        TrxAID: "A0000000041010",
        TrxAmount: "100.00",
        TrxArqc: "**** D05D",
        TrxAuth: "712009",
        TrxCard: "**** 5628",
        TrxCardBank: "SANTANDER",
        TrxCardBrand: "MasterCard",
        TrxCardInstrument: "CREDITO",
        TrxCurrency: "MXN",
        TrxDate: "15/06/2020",
        TrxDescription: "",
        TrxDevice: "PP35271909103698",
        TrxMerchant: "7628597 VMC",
        TrxOriginalNumber: "301268962",
        TrxPaymentMode: "Contado",
        TrxReference: "Ref 1",
        TrxResult: "APPROVED",
        TrxTime: "19:29:36",
        TrxUrl: "/payment/sale",
        TrxUser: "1234"
      };

      axiosMock.onPost(`/terminal-payments/webhooks/getnet/${providerId}`)
        .reply((config) => {
          expect(JSON.parse(config.data)).to.eql(webhookData);
          return [200];
        });

      return api.btrzpay.terminalPayments.webhooks.getnet({
        providerId,
        data: webhookData
      });
    });
  });
});
