"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function healthCheckFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get() {
    return client({
      url: "/healthcheck",
      method: "get"
    });
  }

  return {
    get: get
  };
}

module.exports = healthCheckFactory;