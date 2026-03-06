const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for GET /twilio/phone-numbers/:isocode (btrz-api-notifications). Forwarded to API as-is.
 * @typedef {Object} TwilioPhoneNumbersListQuery
 */

/**
 * Factory for twilio API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ phoneNumbers: { all: function, create: function }, sms: { create: function }, whatsapp: { create: function } }}
 */
function twilioFactory({
  client, internalAuthTokenProvider
}) {
  return {
    phoneNumbers: {
      /**
       * GET /twilio/phone-numbers/:isocode - list Twilio phone numbers for country isocode.
       * @param {Object} opts
       * @param {string} opts.isocode - Country ISO code
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {TwilioPhoneNumbersListQuery} [opts.query] - Optional query params (forwarded to API)
       * @param {Object} [opts.headers] - Optional headers
       * @returns {Promise<import("axios").AxiosResponse>}
       */
      all({
        isocode, token, jwtToken, query = {}, headers
      }) {
        return client.get(`/twilio/phone-numbers/${isocode}`, {
          params: query,
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
        });
      },
      /**
       * POST /twilio/phone-numbers - create/provision a Twilio phone number.
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {Object} [opts.phoneNumberData] - Phone number payload
       * @param {Object} [opts.headers] - Optional headers
       * @returns {Promise<import("axios").AxiosResponse>}
       */
      create({
        token, jwtToken, phoneNumberData = {}, headers
      }) {
        return client({
          url: "/twilio/phone-numbers",
          method: "post",
          data: {
            phoneNumber: phoneNumberData
          },
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
        });
      }
    },
    sms: {
      /**
       * POST /twilio/sms - send SMS via Twilio.
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
          url: "/twilio/sms",
          method: "post",
          data: {
            sms: smsMsg
          },
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
        });
      }
    },
    whatsapp: {
      /**
       * POST /twilio/whatsapp - send WhatsApp message via Twilio.
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {Object} [opts.whatsappMsg] - WhatsApp message payload
       * @param {Object} [opts.headers] - Optional headers
       * @returns {Promise<import("axios").AxiosResponse>}
       */
      create({
        token, jwtToken, whatsappMsg = {}, headers
      }) {
        return client({
          url: "/twilio/whatsapp",
          method: "post",
          data: {
            whatsapp: whatsappMsg
          },
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
        });
      }
    }
  };
}

module.exports = twilioFactory;
