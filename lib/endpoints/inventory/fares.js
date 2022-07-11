"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function faresFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/fares", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        id = _ref3.id,
        headers = _ref3.headers;

    return client.get("/fare/" + id, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        fare = _ref4.fare,
        headers = _ref4.headers;

    return client({
      url: "/fares",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { fare: fare }
    });
  }

  function update(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        fareId = _ref5.fareId,
        fare = _ref5.fare,
        headers = _ref5.headers;

    return client({
      url: "/fare/" + fareId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { fare: fare }
    });
  }

  var adjustments = {
    create: function create(_ref6) {
      var token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          fareId = _ref6.fareId,
          adjustmentsOverride = _ref6.adjustmentsOverride,
          headers = _ref6.headers;

      return client({
        url: "/fares/" + fareId + "/adjustments-overrides",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: { adjustmentsOverride: adjustmentsOverride }
      });
    },
    remove: function remove(_ref7) {
      var token = _ref7.token,
          jwtToken = _ref7.jwtToken,
          fareId = _ref7.fareId,
          adjustmentId = _ref7.adjustmentId,
          headers = _ref7.headers;

      return client({
        url: "/fares/" + fareId + "/adjustments-overrides/" + adjustmentId,
        method: "delete",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        })
      });
    }
  };

  return {
    all: all,
    get: get,
    update: update,
    create: create,
    adjustments: adjustments
  };
}

module.exports = faresFactory;