

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for salesforce API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ sms: { create: function } }}
 */


function salesforceFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  return {
    sms: {
      /**
       * POST /salesforce/sms - send SMS via Salesforce.
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {Object} [opts.smsMsg] - SMS message payload
       * @param {Object} [opts.headers] - Optional headers
       * @returns {Promise<import("axios").AxiosResponse>}
       */
      create: function create(_ref2) {
        const token = _ref2.token;
        const jwtToken = _ref2.jwtToken;
        const _ref2$smsMsg = _ref2.smsMsg;
        const smsMsg = _ref2$smsMsg === undefined ? {} : _ref2$smsMsg;
        const headers = _ref2.headers;

        return client({
          url: "/salesforce/sms",
          method: "post",
          data: {
            sms: smsMsg
          },
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
        });
      }
    }
  };
}

module.exports = salesforceFactory;
