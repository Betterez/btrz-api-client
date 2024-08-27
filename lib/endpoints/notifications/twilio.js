"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function twilioFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  return {
    phoneNumbers: {
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