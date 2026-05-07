const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("sales/order", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";
  const orderId = "orderId1";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get an order by id", () => {
    axiosMock.onGet(`/order/${orderId}`).reply(expectRequest({statusCode: 200, token}));
    return api.sales.order.get({token, orderId});
  });

  it("should create an order", () => {
    axiosMock.onPost("/order").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.sales.order.create({jwtToken, token, order: {cartId: 1234}});
  });

  it("should overwrite an order payment by id", () => {
    axiosMock.onPost(`/orders/${orderId}/payments`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.sales.order.overwrite({jwtToken, token, payments: {payments: []}, orderId: "orderId1"});
  });

  it("should patch an order (complete referenced payment)", () => {
    const operation = {name: "completeReferencedPayment", data: {transactionId: "tx1", paymentResult: {status: "success"}}};
    axiosMock.onPatch("/orders").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.sales.order.patch({jwtToken, token, operation});
  });
});
