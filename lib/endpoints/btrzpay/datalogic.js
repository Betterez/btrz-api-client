

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /datalogic/payments (btrz-api-payments). See get-payments-handler getSpec().
 * @typedef {Object} DatalogicPaymentsListQuery
 * @property {string} referenceNumber - Payment reference number (required)
 */

/**
 * Request body for POST /datalogic/payments/:referenceNumber. PostDatalogicPaymentsPayload.
 * @typedef {Object} PostDatalogicPaymentsPayload
 * @property {string} folio - FEMSA transaction id
 * @property {number} id_terminal - Terminal/group ID
 * @property {string} local_date - Local date (e.g. "02/08/2022 20:33:43")
 * @property {string} amount - Debt amount
 * @property {number} trx_no - Transaction number
 */

/**
 * Request body for POST /datalogic/reverse/:referenceNumber. PostDatalogicReversePayload.
 * @typedef {Object} PostDatalogicReversePayload
 * @property {string} folio - FEMSA transaction id
 * @property {number} id_terminal - Terminal/group ID
 * @property {string} local_date - Local date (e.g. "02/08/2022 20:33:43")
 * @property {number} trx_no - Transaction number
 */

/**
 * Factory for Datalogic API (btrz-api-payments). Endpoints are hideInDocumentation; client for internal use.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ payments: Object, referenceNumber: Object, authCode: Object }}
 */


function datalogicFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function authProvider(opts) {
    return opts !== undefined && opts !== null ? opts : internalAuthTokenProvider;
  }

  const payments = {
    /**
     * GET /datalogic/payments - list Datalogic payments by reference number.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {DatalogicPaymentsListQuery} opts.query - referenceNumber (required)
     * @param {Object} [opts.headers] - Optional headers
     * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider] - Internal auth provider
     * @returns {Promise<import("axios").AxiosResponse<{ payments: Array }>>}
     *   GetDatalogicPaymentsResponse. Rejects 400, 401, 500.
     */
    all: function all(_ref2) {
      const token = _ref2.token;
      const jwtToken = _ref2.jwtToken;
      const headers = _ref2.headers;
      const query = _ref2.query;
      const optsAuth = _ref2.internalAuthTokenProvider;

      return client({
        url: "/datalogic/payments",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider: authProvider(optsAuth), headers})
      });
    },

    /**
     * POST /datalogic/payments/:referenceNumber - pay by reference (20 digits).
     * Body: datalogicInfo or flat PostDatalogicPaymentsPayload.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.referenceNumber - Reference number (20 digits)
     * @param {PostDatalogicPaymentsPayload|{ datalogicInfo: PostDatalogicPaymentsPayload }} opts.data - Body
     * @param {Object} [opts.headers] - Optional headers
     * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider] - Internal auth provider
     * @returns {Promise<import("axios").AxiosResponse<{ payment: Object }>>}
     *   PostDatalogicPaymentsResponse. Rejects 400, 401, 500.
     */
    update: function update(_ref3) {
      const token = _ref3.token;
      const jwtToken = _ref3.jwtToken;
      const headers = _ref3.headers;
      const query = _ref3.query;
      const referenceNumber = _ref3.referenceNumber;
      const data = _ref3.data;
      const optsAuth = _ref3.internalAuthTokenProvider;

      return client({
        url: `/datalogic/payments/${referenceNumber}`,
        method: "post",
        params: query,
        data,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider: authProvider(optsAuth), headers})
      });
    },

    /**
     * POST /datalogic/reverse/:referenceNumber - reverse by reference (20 digits).
     * Body: datalogicReverseInfo or flat PostDatalogicReversePayload.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.referenceNumber - Reference number (20 digits)
     * @param {PostDatalogicReversePayload|{ datalogicReverseInfo: PostDatalogicReversePayload }} opts.data - Body
     * @param {Object} [opts.headers] - Optional headers
     * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider] - Internal auth provider
     * @returns {Promise<import("axios").AxiosResponse<{ payment: Object }>>}
     *   PostDatalogicPaymentsResponse. Rejects 400, 401, 500.
     */
    reverse: function reverse(_ref4) {
      const token = _ref4.token;
      const jwtToken = _ref4.jwtToken;
      const headers = _ref4.headers;
      const query = _ref4.query;
      const referenceNumber = _ref4.referenceNumber;
      const data = _ref4.data;
      const optsAuth = _ref4.internalAuthTokenProvider;

      return client({
        url: `/datalogic/reverse/${referenceNumber}`,
        method: "post",
        params: query,
        data,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider: authProvider(optsAuth), headers})
      });
    }
  };

  const referenceNumber = {
    /**
     * GET /datalogic/reference-number - get new Datalogic reference number.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider] - Internal auth provider
     * @returns {Promise<import("axios").AxiosResponse<{ referenceNumber: string }>>}
     *   GetDatalogicReferenceNumberResponse. Rejects 401, 404, 500.
     */
    get: function get(_ref5) {
      const token = _ref5.token;
      const jwtToken = _ref5.jwtToken;
      const headers = _ref5.headers;
      const optsAuth = _ref5.internalAuthTokenProvider;

      return client({
        url: "/datalogic/reference-number",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider: authProvider(optsAuth), headers})
      });
    }
  };

  const authCode = {
    /**
     * GET /datalogic/auth-code - get new Datalogic authorization code.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider] - Internal auth provider
     * @returns {Promise<import("axios").AxiosResponse<{ authCode: string }>>}
     *   GetDatalogicAuthCodeResponse. Rejects 401, 404, 500.
     */
    get: function get(_ref6) {
      const token = _ref6.token;
      const jwtToken = _ref6.jwtToken;
      const headers = _ref6.headers;
      const optsAuth = _ref6.internalAuthTokenProvider;

      return client({
        url: "/datalogic/auth-code",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider: authProvider(optsAuth), headers})
      });
    }
  };

  return {
    payments,
    referenceNumber,
    authCode
  };
}

module.exports = datalogicFactory;
