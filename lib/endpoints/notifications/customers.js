

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for POST /customers/reset (btrz-api-notifications). See post-customers-reset-password getSpec().
 * @typedef {Object} CustomersResetPostQuery
 * @property {string} providerId - Account id of the customer (required)
 * @property {string} lang - Language of the email (required)
 * @property {string} [customerNumber] - Customer number (include at least one of customerNumber or email)
 * @property {string} [email] - Customer email (include at least one of customerNumber or email)
 * @property {string} [channel] - Channel the customer is using to restore the pass
 * @property {string} [platform] - "ios" | "android" | "web"
 * @property {string} [appName] - Name of the app
 * @property {string} [appVersion] - Version of the app
 * @property {string} [cartPath] - (Deprecated) Initial path of the cart websales endpoint
 */

/**
 * Query params for POST /customers/activation (btrz-api-notifications). See post-customers-activation getSpec().
 * @typedef {Object} CustomersActivationPostQuery
 * @property {string} providerId - Account id of the customer (required)
 * @property {string} [lang] - Language of the email (default en-us)
 * @property {string} [channel] - Channel (e.g. "mobileapp")
 * @property {string} [platform] - "ios" | "android" | "web"
 * @property {string} [appVersion] - Version of the client app
 * @property {string} [appName] - Name of the client app
 */

/**
 * Factory for customers notifications API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ sendResetPasswordEmail: function, sendActivationEmail: function }}
 */


function customersFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /customers/reset - send reset password email to customer.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {CustomersResetPostQuery} [opts.query] - Query params (providerId, lang required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function sendResetPasswordEmail(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      url: "/customers/reset",
      method: "post",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /customers/activation - send activation email to customer.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {CustomersActivationPostQuery} [opts.query] - Query params (providerId required)
   * @param {Object} opts.data - Body: CustomerForActivation (firstName, lastName, email; optional activateCustomerEmailLoginToken)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function sendActivationEmail(_ref3) {
    const token = _ref3.token;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const data = _ref3.data;
    const headers = _ref3.headers;

    return client({
      url: "/customers/activation",
      method: "post",
      params: query,
      data,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    sendResetPasswordEmail,
    sendActivationEmail
  };
}

module.exports = customersFactory;
