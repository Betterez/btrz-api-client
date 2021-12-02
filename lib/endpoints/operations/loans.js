"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function loansFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/loans", {
      params: query,
      headers: authorizationHeaders({
        token: token,
        internalAuthTokenProvider: internalAuthTokenProvider,
        headers: headers
      })
    });
  }

  function get(_ref3) {
    var loanId = _ref3.loanId,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/loans/" + loanId, {
      headers: authorizationHeaders({
        token: token,
        internalAuthTokenProvider: internalAuthTokenProvider,
        headers: headers
      })
    });
  }

  return {
    all: all,
    get: get
  };
}

module.exports = loansFactory;