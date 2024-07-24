"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function externalBookingsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function create(_ref2) {
    var jwtToken = _ref2.jwtToken,
        token = _ref2.token,
        externalBooking = _ref2.externalBooking,
        headers = _ref2.headers,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client({
      url: "/external-bookings",
      method: "post",
      data: externalBooking,
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function remove(_ref3) {
    var jwtToken = _ref3.jwtToken,
        token = _ref3.token,
        ticketId = _ref3.ticketId,
        headers = _ref3.headers;

    return client({
      url: "/external-bookings/" + ticketId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    create: create,
    remove: remove
  };
}

module.exports = externalBookingsFactory;