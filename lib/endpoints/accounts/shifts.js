"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function shiftsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var jwtToken = _ref2.jwtToken,
        token = _ref2.token,
        query = _ref2.query,
        headers = _ref2.headers;

    return client.get("/shifts", {
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      params: query
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        userId = _ref3.userId,
        headers = _ref3.headers;

    return client.get("/shift/user/" + userId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        shiftData = _ref4.shiftData,
        headers = _ref4.headers;

    return client({
      url: "/shifts",
      method: "post",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: shiftData
    });
  }

  function update(_ref5) {
    var jwtToken = _ref5.jwtToken,
        token = _ref5.token,
        shiftId = _ref5.shiftId,
        operations = _ref5.operations,
        headers = _ref5.headers,
        query = _ref5.query;

    return client({
      url: "/shifts/" + shiftId,
      method: "patch",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        operations: operations
      },
      params: query
    });
  }

  var locationClosures = {
    create: function create(_ref6) {
      var jwtToken = _ref6.jwtToken,
          token = _ref6.token,
          locationClosure = _ref6.locationClosure,
          headers = _ref6.headers;

      return client({
        url: "/shifts/location-closures",
        method: "post",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: locationClosure
      });
    },
    all: function all(_ref7) {
      var jwtToken = _ref7.jwtToken,
          token = _ref7.token,
          query = _ref7.query,
          headers = _ref7.headers;

      return client.get("/shifts/location-closures", {
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        params: query
      });
    },
    get: function get(_ref8) {
      var token = _ref8.token,
          jwtToken = _ref8.jwtToken,
          locationClosureId = _ref8.locationClosureId,
          headers = _ref8.headers;

      return client.get("/shifts/location-closures/" + locationClosureId, {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  var payments = {
    get: function get(_ref9) {
      var token = _ref9.token,
          jwtToken = _ref9.jwtToken,
          shiftId = _ref9.shiftId,
          headers = _ref9.headers;

      return client.get("/shifts/" + shiftId + "/payments", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    payments: payments,
    locationClosures: locationClosures
  };
}

module.exports = shiftsFactory;