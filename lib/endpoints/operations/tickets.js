"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function ticketsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        id = _ref2.id;

    return client({
      url: "/tickets/" + id,
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function patch(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        id = _ref3.id,
        operations = _ref3.operations,
        warningsEnabled = _ref3.warningsEnabled;

    return client({
      url: "/tickets/" + id,
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { operations: operations, warningsEnabled: warningsEnabled }
    });
  }

  function companionTickets(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        ticketId = _ref4.ticketId;

    return client({
      url: "/tickets/" + ticketId + "/companion-tickets",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken })
    });
  }

  return {
    get: get,
    patch: patch,
    companionTickets: companionTickets
  };
}

module.exports = ticketsFactory;