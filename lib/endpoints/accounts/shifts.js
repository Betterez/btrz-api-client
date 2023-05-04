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
  var tickets = {
    get: function get(_ref12) {
      var token = _ref12.token,
          jwtToken = _ref12.jwtToken,
          shiftId = _ref12.shiftId,
          headers = _ref12.headers;

      return client.get("/shifts/" + shiftId + "/tickets", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var fees = {
    get: function get(_ref13) {
      var token = _ref13.token,
          jwtToken = _ref13.jwtToken,
          shiftId = _ref13.shiftId,
          headers = _ref13.headers;

      return client.get("/shifts/" + shiftId + "/fees", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var refunds = {
    get: function get(_ref14) {
      var token = _ref14.token,
          jwtToken = _ref14.jwtToken,
          shiftId = _ref14.shiftId,
          headers = _ref14.headers;

      return client.get("/shifts/" + shiftId + "/refunds", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var items = {
    get: function get(_ref15) {
      var token = _ref15.token,
          jwtToken = _ref15.jwtToken,
          shiftId = _ref15.shiftId,
          headers = _ref15.headers;

      return client.get("/shifts/" + shiftId + "/items", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var redeemableItems = {
    get: function get(_ref16) {
      var token = _ref16.token,
          jwtToken = _ref16.jwtToken,
          shiftId = _ref16.shiftId,
          headers = _ref16.headers;

      return client.get("/shifts/" + shiftId + "/redeemable-items", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var giftCertificates = {
    get: function get(_ref17) {
      var token = _ref17.token,
          jwtToken = _ref17.jwtToken,
          shiftId = _ref17.shiftId,
          headers = _ref17.headers;

      return client.get("/shifts/" + shiftId + "/gift-certificates", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var parcels = {
    get: function get(_ref18) {
      var token = _ref18.token,
          jwtToken = _ref18.jwtToken,
          shiftId = _ref18.shiftId,
          headers = _ref18.headers;

      return client.get("/shifts/" + shiftId + "/parcels", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var insurances = {
    get: function get(_ref19) {
      var token = _ref19.token,
          jwtToken = _ref19.jwtToken,
          shiftId = _ref19.shiftId,
          headers = _ref19.headers;

      return client.get("/shifts/" + shiftId + "/insurances", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
  var deposits = {
    get: function get(_ref20) {
      var token = _ref20.token,
          jwtToken = _ref20.jwtToken,
          shiftId = _ref20.shiftId,
          headers = _ref20.headers;

      return client.get("/shifts/" + shiftId + "/deposits", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    create: function create(_ref21) {
      var jwtToken = _ref21.jwtToken,
          token = _ref21.token,
          shiftId = _ref21.shiftId,
          deposit = _ref21.deposit,
          headers = _ref21.headers;

      return client({
        url: "/shifts/" + shiftId + "/deposits",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: deposit
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
    tickets: tickets,
    fees: fees,
    refunds: refunds,
    items: items,
    redeemableItems: redeemableItems,
    giftCertificates: giftCertificates,
    parcels: parcels,
    insurances: insurances,
    deposits: deposits,
    locationClosures: locationClosures
  };
}

module.exports = shiftsFactory;