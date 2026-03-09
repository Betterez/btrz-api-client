const {authorizationHeaders} = require("../endpoints_helpers.js");

/**
 * Pago Express (Datalogic) endpoints for the Operations API.
 * Used to get info, pay, and reverse reference payments.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} pagoExpress API methods
 */
function pagoExpressFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /pago-express/info - get transaction information for a Pago Express reference.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (x-api-key)
   * @param {string} [opts.jwtToken] - JWT or internal auth
   * @param {Object} opts.payment - Request body: folio (20-digit string), id_terminal (number), local_date (string DD/MM/YYYY HH:mm:ss), trx_no (number)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} 200 PostInfoResponse (code, message, result with folio, id_terminal, local_date, saldo, trx_no, responsecode, descriptioncode)
   */
  function info({token, jwtToken, payment, headers}) {
    return client({
      method: "post",
      url: "/pago-express/info",
      data: {payment},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /pago-express/pay - pay a Pago Express reference payment.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (x-api-key)
   * @param {string} [opts.jwtToken] - JWT or internal auth
   * @param {Object} opts.payment - Request body: folio, id_terminal, local_date, trx_no, amount (string)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} 200 PostPayResponse (code, message, result with folio, id_terminal, local_date, trx_no, noauto, amount, responsecode, descriptioncode)
   */
  function pay({token, jwtToken, payment, headers}) {
    return client({
      method: "post",
      url: "/pago-express/pay",
      data: {payment},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /pago-express/reverse - reverse (cancel) a Pago Express reference payment. Emits transaction.reversed webhook.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (x-api-key)
   * @param {string} [opts.jwtToken] - JWT or internal auth
   * @param {Object} opts.reversePayment - Request body: folio, id_terminal, local_date, trx_no, amount (string)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} 200 PostReverseResponse (code, message, result)
   */
  function reverse({token, jwtToken, reversePayment, headers}) {
    return client({
      method: "post",
      url: "/pago-express/reverse",
      data: {reversePayment},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    info,
    pay,
    reverse
  };
}

module.exports = pagoExpressFactory;
