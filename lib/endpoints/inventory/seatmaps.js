"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function seatmapsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var seatmapId = _ref2.seatmapId,
        routeId = _ref2.routeId,
        scheduleId = _ref2.scheduleId,
        manifestDate = _ref2.manifestDate,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        token = _ref2.token,
        headers = _ref2.headers;

    return client.get("/seatmaps/" + seatmapId + "/available-seats/" + routeId + "/" + scheduleId + "/" + manifestDate, {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    get: get
  };
}

module.exports = seatmapsFactory;