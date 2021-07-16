"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function routesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var routeId = _ref2.routeId,
        token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client({
      url: "/route/" + routeId,
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function prices(_ref3) {
    var token = _ref3.token,
        productId = _ref3.productId,
        originId = _ref3.originId,
        destinationId = _ref3.destinationId,
        channel = _ref3.channel,
        query = _ref3.query;

    var params = Object.assign({}, query, { productId: productId, originId: originId, destinationId: destinationId, channel: channel });

    return client({
      url: "/routes/prices",
      params: params,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function all(_ref4) {
    var token = _ref4.token,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query;

    return client.get("/routes", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function stations(_ref5) {
    var token = _ref5.token,
        routeId = _ref5.routeId;

    return client({
      url: "/routes/" + routeId + "/stations",
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  var fareTables = {
    all: function all(_ref6) {
      var token = _ref6.token,
          _ref6$query = _ref6.query,
          query = _ref6$query === undefined ? {} : _ref6$query;

      return client({
        url: "/routes/fare-tables",
        params: query,
        headers: authorizationHeaders({
          token: token, internalAuthTokenProvider: internalAuthTokenProvider
        })
      });
    },
    update: function update(_ref7) {
      var token = _ref7.token,
          jwtToken = _ref7.jwtToken,
          routeId = _ref7.routeId,
          fareTableId = _ref7.fareTableId,
          fareTable = _ref7.fareTable;

      return client({
        url: "/routes/" + routeId + "/fare-tables/" + fareTableId,
        method: "put",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider
        }),
        data: {
          fareTable: fareTable
        }
      });
    }
  };

  return {
    get: get,
    prices: prices,
    all: all,
    stations: stations,
    fareTables: fareTables
  };
}

module.exports = routesFactory;