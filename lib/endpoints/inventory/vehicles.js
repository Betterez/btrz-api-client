"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function vehiclesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/vehicles", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var vehicleId = _ref3.vehicleId,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/vehicles/" + vehicleId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        vehicle = _ref4.vehicle,
        headers = _ref4.headers;

    return client({
      url: "/vehicles",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        vehicle: vehicle
      }
    });
  }

  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        vehicleId = _ref5.vehicleId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/vehicles/" + vehicleId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        vehicleId = _ref6.vehicleId,
        vehicle = _ref6.vehicle,
        headers = _ref6.headers;

    return client({
      url: "/vehicles/" + vehicleId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        vehicle: vehicle
      }
    });
  }

  var seatmaps = {
    create: function create(_ref7) {
      var jwtToken = _ref7.jwtToken,
          token = _ref7.token,
          vehicleId = _ref7.vehicleId,
          seatmap = _ref7.seatmap,
          headers = _ref7.headers;

      return client({
        url: "/vehicles/" + vehicleId + "/seatmaps",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: {
          seatmap: seatmap
        }
      });
    },
    remove: function remove(_ref8) {
      var jwtToken = _ref8.jwtToken,
          vehicleId = _ref8.vehicleId,
          seatMapId = _ref8.seatMapId,
          token = _ref8.token,
          headers = _ref8.headers;

      return client({
        url: "/vehicles/" + vehicleId + "/seatmaps/" + seatMapId,
        method: "delete",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    remove: remove,
    seatmaps: seatmaps
  };
}

module.exports = vehiclesFactory;