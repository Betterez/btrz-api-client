"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function accountingItemsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client.get("/accounting-items", {
      params: query,
      headers: authorizationHeaders({
        token: token,
        internalAuthTokenProvider: internalAuthTokenProvider
      })
    });
  }

  function get(_ref3) {
    var accountingItemId = _ref3.accountingItemId,
        token = _ref3.token;

    return client.get("/accounting-items/" + accountingItemId, {
      headers: authorizationHeaders({
        token: token,
        internalAuthTokenProvider: internalAuthTokenProvider
      })
    });
  }

  return {
    all: all,
    get: get
  };
}

module.exports = accountingItemsFactory;