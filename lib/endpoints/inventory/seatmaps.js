"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function seatmapsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/seatmaps", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }
  function get(_ref3) {
    var seatmapId = _ref3.seatmapId,
        routeId = _ref3.routeId,
        scheduleId = _ref3.scheduleId,
        manifestDate = _ref3.manifestDate,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/seatmaps/" + seatmapId + "/available-seats/" + routeId + "/" + scheduleId + "/" + manifestDate, {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    all: all,
    get: get
  };
}

module.exports = seatmapsFactory;