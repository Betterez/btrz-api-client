const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for salesforce API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ sms: { create: function, deliveries: { get: function } } }}
 */
function salesforceFactory({
  client, internalAuthTokenProvider
}) {
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
      create({
        token, jwtToken, smsMsg = {}, headers
      }) {
        return client({
          url: "/salesforce/sms",
          method: "post",
          data: {
            sms: smsMsg
          },
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
        });
      },
      deliveries: {
        /**
         * GET /salesforce/sms/deliveries/{tokenId} - Marketing Cloud delivery status.
         * messageId is resolved server-side from the account Salesforce settings.
         * @param {Object} opts
         * @param {string} [opts.token] - API key
         * @param {string} [opts.jwtToken] - JWT or internal auth symbol
         * @param {string} opts.tokenId - Marketing Cloud tokenId from the accepted send
         * @param {Object} [opts.headers] - Optional headers
         * @returns {Promise<import("axios").AxiosResponse>}
         */
        get({
          token, jwtToken, tokenId, headers
        }) {
          return client({
            url: `/salesforce/sms/deliveries/${tokenId}`,
            method: "get",
            headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
          });
        }
      }
    }
  };
}

module.exports = salesforceFactory;
