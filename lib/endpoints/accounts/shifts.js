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

  var locationClosureComments = {
    create: function create(_ref6) {
      var jwtToken = _ref6.jwtToken,
          token = _ref6.token,
          locationClosureId = _ref6.locationClosureId,
          locationClosureComment = _ref6.locationClosureComment,
          headers = _ref6.headers;

      return client({
        url: "/shifts/location-closures/" + locationClosureId + "/comments",
        method: "post",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: locationClosureComment
      });
    }
  };

  var locationClosures = {
    create: function create(_ref7) {
      var jwtToken = _ref7.jwtToken,
          token = _ref7.token,
          locationClosure = _ref7.locationClosure,
          headers = _ref7.headers;

      return client({
        url: "/shifts/location-closures",
        method: "post",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: locationClosure
      });
    },
    all: function all(_ref8) {
      var jwtToken = _ref8.jwtToken,
          token = _ref8.token,
          query = _ref8.query,
          headers = _ref8.headers;

      return client.get("/shifts/location-closures", {
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        params: query
      });
    },
    get: function get(_ref9) {
      var token = _ref9.token,
          jwtToken = _ref9.jwtToken,
          locationClosureId = _ref9.locationClosureId,
          headers = _ref9.headers;

      return client.get("/shifts/location-closures/" + locationClosureId, {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    comments: locationClosureComments
  };

  var payments = {
    get: function get(_ref10) {
      var token = _ref10.token,
          jwtToken = _ref10.jwtToken,
          shiftId = _ref10.shiftId,
          headers = _ref10.headers;

      return client.get("/shifts/" + shiftId + "/payments", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var transactions = {
    get: function get(_ref11) {
      var token = _ref11.token,
          jwtToken = _ref11.jwtToken,
          shiftId = _ref11.shiftId,
          headers = _ref11.headers;

      return client.get("/shifts/" + shiftId + "/transactions", {
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
    transactions: transactions,
    locationClosures: locationClosures
  };
}

module.exports = shiftsFactory;