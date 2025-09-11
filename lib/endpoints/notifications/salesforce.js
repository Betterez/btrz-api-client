"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function salesforceFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  return {
    sms: {
      create: function create(_ref2) {
        var token = _ref2.token,
            jwtToken = _ref2.jwtToken,
            _ref2$smsMsg = _ref2.smsMsg,
            smsMsg = _ref2$smsMsg === undefined ? {} : _ref2$smsMsg,
            headers = _ref2.headers;

        return client({
          url: "/salesforce/sms",
          method: "post",
          data: {
            sms: smsMsg
          },
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
        });
      }
    }

  };
}

module.exports = salesforceFactory;