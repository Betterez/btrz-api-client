"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function ticketsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        id = _ref2.id,
        headers = _ref2.headers;

    return client({
      url: "/tickets/" + id,
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function patch(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        id = _ref3.id,
        operations = _ref3.operations,
        warningsEnabled = _ref3.warningsEnabled,
        headers = _ref3.headers;

    return client({
      url: "/tickets/" + id,
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { operations: operations, warningsEnabled: warningsEnabled }
    });
  }

  function companionTickets(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        ticketId = _ref4.ticketId,
        headers = _ref4.headers;

    return client({
      url: "/tickets/" + ticketId + "/companion-tickets",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, headers: headers })
    });
  }

  function all(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        _ref5$query = _ref5.query,
        query = _ref5$query === undefined ? {} : _ref5$query,
        headers = _ref5.headers;

    return client({
      url: "/tickets",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    get: get,
    all: all,
    patch: patch,
    companionTickets: companionTickets
  };
}

module.exports = ticketsFactory;