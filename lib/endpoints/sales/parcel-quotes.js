"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function parcelQuotesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var token = _ref2.token,
        parcelQuoteData = _ref2.parcelQuoteData,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/parcel-quotes",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: parcelQuoteData
    });
  }

  return {
    get: get
  };
}

module.exports = parcelQuotesFactory;