"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function printedTicketsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$responseType = _ref2.responseType,
        responseType = _ref2$responseType === undefined ? "json" : _ref2$responseType,
        trxId = _ref2.trxId,
        lang = _ref2.lang,
        date = _ref2.date;

    return client({
      url: "/printed-tickets",
      params: { trxId: trxId, lang: lang, date: date },
      responseType: responseType,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  return {
    get: get
  };
}

module.exports = printedTicketsFactory;