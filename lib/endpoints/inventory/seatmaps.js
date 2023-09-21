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

  function getById(_ref4) {
    var seatmapId = _ref4.seatmapId,
        token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query,
        headers = _ref4.headers;

    return client.get("/seatmaps/" + seatmapId, {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        seatmap = _ref5.seatmap,
        headers = _ref5.headers;

    return client({
      url: "/seatmaps",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        seatmap: seatmap
      }
    });
  }

  function update(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        seatmapId = _ref6.seatmapId,
        seatmap = _ref6.seatmap,
        headers = _ref6.headers;

    return client({
      url: "/seatmaps/" + seatmapId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        seatmap: seatmap
      }
    });
  }

  function remove(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        seatmapId = _ref7.seatmapId,
        headers = _ref7.headers;

    return client({
      url: "/seatmaps/" + seatmapId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    all: all,
    get: get,
    getById: getById,
    create: create,
    remove: remove,
    update: update
  };
}

module.exports = seatmapsFactory;