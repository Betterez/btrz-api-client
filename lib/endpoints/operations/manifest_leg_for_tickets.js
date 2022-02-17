"use strict";

var _require = require("../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function manifestLegForTicketsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        ticketId = _ref2.ticketId,
        params = _ref2.params,
        headers = _ref2.headers;

    return client({
      url: "/manifest-leg-for-tickets/" + ticketId,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: params
    });
  }

  return {
    get: get
  };
}

module.exports = manifestLegForTicketsFactory;