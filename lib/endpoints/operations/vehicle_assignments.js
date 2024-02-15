"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function vehicleAssignmentFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  return {
    all: function all(_ref2) {
      var token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          _ref2$query = _ref2.query,
          query = _ref2$query === undefined ? {} : _ref2$query,
          headers = _ref2.headers;

      return client({
        url: "/vehicle-assignments",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    get: function get(_ref3) {
      var token = _ref3.token,
          jwtToken = _ref3.jwtToken,
          vehicleAssignmentId = _ref3.vehicleAssignmentId,
          headers = _ref3.headers;

      return client.get("/vehicle-assignments/" + vehicleAssignmentId, {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    create: function create(_ref4) {
      var data = _ref4.data,
          token = _ref4.token,
          jwtToken = _ref4.jwtToken,
          headers = _ref4.headers;

      return client({
        url: "/vehicle-assignments",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    },
    update: function update(_ref5) {
      var vehicleAssignmentId = _ref5.vehicleAssignmentId,
          data = _ref5.data,
          token = _ref5.token,
          jwtToken = _ref5.jwtToken,
          headers = _ref5.headers;

      return client({
        url: "/vehicle-assignments/" + vehicleAssignmentId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    }
  };
}

module.exports = vehicleAssignmentFactory;