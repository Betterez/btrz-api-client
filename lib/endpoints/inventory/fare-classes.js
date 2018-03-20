"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function fareClassesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function create(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        fareClass = _ref2.fareClass;

    return client({
      url: "/fare-classes",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { fareClass: fareClass }
    });
  }

  return {
    create: create
  };
}

module.exports = fareClassesFactory;