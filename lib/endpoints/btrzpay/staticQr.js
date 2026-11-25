const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for static QR payments API (btrz-api-payments). Each gateway is nested under its name,
 * like terminalPayments.mit.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ busplus: { qrImages: { get: function } }, confirmPayment: function }}
 */
function staticQrFactory({
  client,
  internalAuthTokenProvider
}) {
  const busplus = {
    qrImages: {
      /**
       * GET /static-qr/busplus/qr-image - get the Busplus Galicia static QR image of the
       * logged-in Betterez user. Requires backoffice auth. Response body: { imagen, posId }.
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {Object} [opts.headers] - Optional headers
       * @returns {Promise<import("axios").AxiosResponse<{ imagen: string, posId: string }>>}
       */
      get({
        token,
        jwtToken,
        headers
      }) {
        return client.get("/static-qr/busplus/qr-image", {
          params: {},
          headers: authorizationHeaders({
            token,
            jwtToken,
            internalAuthTokenProvider,
            headers
          })
        });
      }
    }
  };

  /**
   * POST /static-qr/transactions/:transactionId/confirm-payment - confirm a pending static QR payment of a
   * transaction with its QR provider; a paid intention completes the order. Requires backoffice auth.
   * Errors: 404 TRANSACTION_NOT_FOUND; 409 STATIC_QR_PAYMENT_NOT_PENDING, STATIC_QR_PAYMENT_NOT_PAID_YET,
   * STATIC_QR_PAYMENT_REJECTED, STATIC_QR_PAYMENT_ALREADY_CLAIMED; 502 STATIC_QR_CONFIRMATION_FAILED.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.transactionId - Transaction id
   * @param {string} opts.user - Display name of the user who confirms
   * @param {string} opts.createdDateTime - Confirmation date and time, in the account's zone and format
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{}>>}
   */
  function confirmPayment({
    token,
    jwtToken,
    transactionId,
    user,
    createdDateTime,
    headers
  }) {
    return client({
      url: `/static-qr/transactions/${transactionId}/confirm-payment`,
      method: "post",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        user,
        createdDateTime
      }
    });
  }
  return {
    busplus,
    confirmPayment
  };
}
module.exports = staticQrFactory;