"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for twilio API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ phoneNumbers: { all: function, create: function }, sms: { create: function }, whatsapp: { create: function } }}
 */


function twilioFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  return {
    phoneNumbers: {
      /**
       * GET /twilio/phone-numbers/:isocode - list Twilio phone numbers for country isocode. API does not accept query params.
       * @param {Object} opts
       * @param {string} opts.isocode - Country ISO code
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {Object} [opts.headers] - Optional headers
       * @returns {Promise<import("axios").AxiosResponse>}
       */
      all: function all(_ref2) {
        var isocode = _ref2.isocode,
            token = _ref2.token,
            jwtToken = _ref2.jwtToken,
            _ref2$query = _ref2.query,
            query = _ref2$query === undefined ? {} : _ref2$query,
            headers = _ref2.headers;

        return client.get("/twilio/phone-numbers/" + isocode, {
          params: query,
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
      create: function create(_ref3) {
        var token = _ref3.token,
            jwtToken = _ref3.jwtToken,
            _ref3$phoneNumberData = _ref3.phoneNumberData,
            phoneNumberData = _ref3$phoneNumberData === undefined ? {} : _ref3$phoneNumberData,
            headers = _ref3.headers;

        return client({
          url: "/twilio/phone-numbers",
          method: "post",
          data: {
            phoneNumber: phoneNumberData
          },
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
      create: function create(_ref4) {
        var token = _ref4.token,
            jwtToken = _ref4.jwtToken,
            _ref4$smsMsg = _ref4.smsMsg,
            smsMsg = _ref4$smsMsg === undefined ? {} : _ref4$smsMsg,
            headers = _ref4.headers;

        return client({
          url: "/twilio/sms",
          method: "post",
          data: {
            sms: smsMsg
          },
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
      create: function create(_ref5) {
        var token = _ref5.token,
            jwtToken = _ref5.jwtToken,
            _ref5$whatsappMsg = _ref5.whatsappMsg,
            whatsappMsg = _ref5$whatsappMsg === undefined ? {} : _ref5$whatsappMsg,
            headers = _ref5.headers;

        return client({
          url: "/twilio/whatsapp",
          method: "post",
          data: {
            whatsapp: whatsappMsg
          },
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
        });
      }
    }
  };
}

module.exports = twilioFactory;