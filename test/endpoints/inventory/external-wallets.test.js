const {
  axiosMock,
  expectRequest
} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("inventory/external-wallets", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  describe("/saldo-max", () => {
    it("should create a new Saldo Max wallet", async () => {
      const externalWallet = {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        tel: "+123456789",
        dob: "1990-01-01",
        nip: 6789
      };

      axiosMock.onPost("/external-wallets/saldo-max").reply(expectRequest({
        statusCode: 200, token, jwtToken, body: {externalWallet}
      }));

      return api.inventory.externalWallets.saldoMax.create({
        jwtToken,
        token,
        externalWallet
      });
    });

    it("should update an existing Saldo Max wallet", async () => {
      const externalWallet = {
        _id: "wallet-id-123",
        dob: "1992-02-02",
        email: "jane.doe@example.com",
        firstName: "Jane",
        lastName: "Doe",
        nip: 1234,
        status: "active",
        tel: "+987654321",
        walletNumber: "CTCW6K"
      };

      const externalWalletFieldsToUpdate = {
        nip: externalWallet.nip,
        walletNumber: externalWallet.walletNumber,
        status: externalWallet.status
      };

      axiosMock.onPut(`/external-wallets/saldo-max/${externalWallet._id}`).reply(expectRequest({
        statusCode: 200, token, jwtToken, body: {externalWallet: externalWalletFieldsToUpdate}
      }));

      return api.inventory.externalWallets.saldoMax.update({
        jwtToken,
        token,
        externalWallet
      });
    });

    it("should retrieve an existing Saldo Max wallet by id", () => {
      const walletId = "1234123412341234";

      axiosMock.onGet(`/external-wallets/saldo-max/${walletId}`).reply(expectRequest({
        statusCode: 200, token, jwtToken
      }));

      return api.inventory.externalWallets.saldoMax.get({
        jwtToken,
        token,
        walletId
      });
    });
  });
});
