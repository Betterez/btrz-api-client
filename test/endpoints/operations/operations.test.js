const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('operations/segments', function() {
  const token = 'I owe you a token';
  const jwtToken = 'I owe you a JWT token';

  afterEach(function() {
    axiosMock.reset();
  });

  it("should get segments for product and ticket", function() {
    const productId = "productId1",
      ticketId = "ticketId1";
    axiosMock.onGet(`/products/${productId}/segments/${ticketId}`)
      .reply(expectRequest({ statusCode: 200, token }));
    return api.operations.segments.all({ token, jwtToken, productId, ticketId });
  });
});

describe("operations/pagoExpress", function() {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(function() {
    axiosMock.reset();
  });

  it("should post pago-express info", function() {
    const payment = { folio: "10305108982123541235", id_terminal: 45875263254987452135, local_date: "18/06/1988 15:04:20", trx_no: 12345 };
    axiosMock.onPost("/pago-express/info")
      .reply(expectRequest({ statusCode: 200, token, jwtToken, body: { payment } }));
    return api.operations.pagoExpress.info({ token, jwtToken, payment });
  });

  it("should post pago-express pay", function() {
    const payment = { folio: "10305108982123541235", id_terminal: 45875263254987452135, local_date: "18/06/1988 15:04:20", trx_no: 12345, amount: "999.00" };
    axiosMock.onPost("/pago-express/pay")
      .reply(expectRequest({ statusCode: 200, token, jwtToken, body: { payment } }));
    return api.operations.pagoExpress.pay({ token, jwtToken, payment });
  });

  it("should post pago-express reverse", function() {
    const reversePayment = { folio: "10305108982123541235", id_terminal: 45875263254987452135, local_date: "18/06/1988 15:04:20", trx_no: 12345, amount: "999.00" };
    axiosMock.onPost("/pago-express/reverse")
      .reply(expectRequest({ statusCode: 200, token, jwtToken, body: { reversePayment } }));
    return api.operations.pagoExpress.reverse({ token, jwtToken, reversePayment });
  });
});
