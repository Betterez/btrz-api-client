"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Pago Express (Datalogic) endpoints for the Operations API.
 * Used to get info, pay, and reverse reference payments.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} pagoExpress API methods
 */


function pagoExpressFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /pago-express/info - get transaction information for a Pago Express reference.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (x-api-key)
   * @param {string} [opts.jwtToken] - JWT or internal auth
   * @param {Object} opts.payment - Request body: folio (20-digit string), id_terminal (number), local_date (string DD/MM/YYYY HH:mm:ss), trx_no (number)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} 200 PostInfoResponse (code, message, result with folio, id_terminal, local_date, saldo, trx_no, responsecode, descriptioncode)
   */
  function info(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        payment = _ref2.payment,
        headers = _ref2.headers;

    return client({
      method: "post",
      url: "/pago-express/info",
      data: { payment: payment },
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
  function pay(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        payment = _ref3.payment,
        headers = _ref3.headers;

    return client({
      method: "post",
      url: "/pago-express/pay",
      data: { payment: payment },
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
  function reverse(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        reversePayment = _ref4.reversePayment,
        headers = _ref4.headers;

    return client({
      method: "post",
      url: "/pago-express/reverse",
      data: { reversePayment: reversePayment },
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    info: info,
    pay: pay,
    reverse: reverse
  };
}

module.exports = pagoExpressFactory;