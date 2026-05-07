

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /terminal-payments/mit/:id (btrz-api-payments). See get-mit-by-id-handler getSpec().
 * @typedef {Object} TerminalPaymentsMitGetQuery
 * @property {string} [providerId] - Account provider (operator) ID; used by agencies/sellers; when omitted, authenticated account is used
 * @property {string} branchId - Branch id where payment started (required). Example: 00676
 * @property {string} companyId - Company id where payment started (required). Example: Z890
 * @property {string} date - Date when payment started; format dd/mm/yyyy (required)
 */

/**
 * Query params for PUT /terminal-payments/mit/:id (btrz-api-payments). See put-mit-handler getSpec().
 * @typedef {Object} TerminalPaymentsMitPutQuery
 * @property {string} [providerId] - Account provider (operator) ID; used by agencies/sellers
 */

/**
 * Factory for terminal payments API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ mit: Object, webhooks: Object }}
 */


function terminalPaymentsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  const mit = {
    /**
     * PUT /terminal-payments/mit/:terminalPaymentId - complete MIT terminal payment with result from terminal.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Terminal payment ID (UUID)
     * @param {{ result?: Object, paymentRequest: Object, orderId: string }} opts.terminalPayment - Terminal payment data (result, paymentRequest, orderId)
     * @param {TerminalPaymentsMitPutQuery} [opts.query] - Optional providerId
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ terminalPayment: Object }>>} Rejects with 400 (WRONG_DATA, INVALID_TERMINALPAYMENT_ID, INVALID_RESULT_OBJECT, MIT_*), 401, 404 (TERMINALPAYMENT_NOT_FOUND, MIT_PAYMENT_NOT_FOUND), 409 (CANT_UPDATE_ORDER), 500.
     */
    update: function update(_ref2) {
      const token = _ref2.token;
      const jwtToken = _ref2.jwtToken;
      const id = _ref2.id;
      const terminalPayment = _ref2.terminalPayment;
      const _ref2$query = _ref2.query;
      const query = _ref2$query === undefined ? {} : _ref2$query;
      const headers = _ref2.headers;

      return client({
        url: `/terminal-payments/mit/${id}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: {terminalPayment}
      });
    },

    /**
     * GET /terminal-payments/mit/:terminalPaymentId - get MIT terminal payment result from MIT servers.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.id - Terminal payment ID (UUID)
     * @param {TerminalPaymentsMitGetQuery} opts.query - branchId, companyId, date (required); optional providerId
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ terminalPayment: Object }>>} Rejects with 400 (WRONG_DATA, INVALID_TERMINALPAYMENT_ID, INVALID_DATE, MIT_*), 401, 404 (TERMINALPAYMENT_NOT_FOUND, MIT_PAYMENT_NOT_FOUND), 500.
     */
    get: function get(_ref3) {
      const token = _ref3.token;
      const jwtToken = _ref3.jwtToken;
      const id = _ref3.id;
      const _ref3$query = _ref3.query;
      const query = _ref3$query === undefined ? {} : _ref3$query;
      const headers = _ref3.headers;

      return client.get(`/terminal-payments/mit/${id}`, {
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const webhooks = {
    /**
     * POST /terminal-payments/webhooks/getnet/:providerId - Getnet Terminal webhook (inbound). API does not accept query params.
     * @param {Object} opts
     * @param {Object} opts.data - Getnet webhook payload (e.g. TrxResult, TrxReference, userId)
     * @param {string} opts.providerId - Provider (account) ID for getnet_terminal payment method
     * @param {Object} [opts.headers] - Optional headers
     * @param {string} [opts.token] - API key (optional when no userId in payload)
     * @param {string} [opts.jwtToken] - JWT or internal auth (required when userId is in payload)
     * @returns {Promise<import("axios").AxiosResponse<{ status: string }>>} Rejects with 400 (INVALID_WEBHOOK_PAYLOAD), 401 (when userId present but not authenticated), 404 (PAYMENT_NOT_FOUND_FOR_WEBHOOK_EVENT, PAYMENT_METHOD_NOT_FOUND, USER_NOT_FOUND), 409 (CANT_UPDATE_ORDER), 500.
     */
    getnet: function getnet(_ref4) {
      const data = _ref4.data;
      const providerId = _ref4.providerId;
      const _ref4$headers = _ref4.headers;
      const headers = _ref4$headers === undefined ? {} : _ref4$headers;
      const token = _ref4.token;
      const jwtToken = _ref4.jwtToken;

      const _headers = token && jwtToken ? authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}) : headers;

      return client({
        url: `/terminal-payments/webhooks/getnet/${providerId}`,
        method: "post",
        headers: _headers,
        data
      });
    }
  };

  return {
    mit,
    webhooks
  };
}

module.exports = terminalPaymentsFactory;
