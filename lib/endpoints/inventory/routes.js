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
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/route/" + routeId,
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function prices(_ref3) {
    var token = _ref3.token,
        productId = _ref3.productId,
        originId = _ref3.originId,
        destinationId = _ref3.destinationId,
        channel = _ref3.channel,
        query = _ref3.query,
        headers = _ref3.headers;

    var params = Object.assign({}, query, { productId: productId, originId: originId, destinationId: destinationId, channel: channel });

    return client({
      url: "/routes/prices",
      params: params,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function all(_ref4) {
    var token = _ref4.token,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query,
        headers = _ref4.headers;

    return client.get("/routes", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function stations(_ref5) {
    var token = _ref5.token,
        routeId = _ref5.routeId,
        headers = _ref5.headers;

    return client({
      url: "/routes/" + routeId + "/stations",
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        data = _ref6.data,
        headers = _ref6.headers;

    return client({
      url: "/routes",
      method: "post",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: data
    });
  }

  var fareTables = {
    all: function all(_ref7) {
      var token = _ref7.token,
          _ref7$query = _ref7.query,
          query = _ref7$query === undefined ? {} : _ref7$query,
          headers = _ref7.headers;

      return client({
        url: "/routes/fare-tables",
        params: query,
        headers: authorizationHeaders({
          token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        })
      });
    },
    create: function create(_ref8) {
      var token = _ref8.token,
          jwtToken = _ref8.jwtToken,
          routeId = _ref8.routeId,
          fareTable = _ref8.fareTable,
          headers = _ref8.headers;

      return client({
        url: "/routes/" + routeId + "/fare-tables",
        method: "post",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: {
          fareTable: fareTable
        }
      });
    },
    update: function update(_ref9) {
      var token = _ref9.token,
          jwtToken = _ref9.jwtToken,
          routeId = _ref9.routeId,
          fareTableId = _ref9.fareTableId,
          fareTable = _ref9.fareTable,
          headers = _ref9.headers;

      return client({
        url: "/routes/" + routeId + "/fare-tables/" + fareTableId,
        method: "put",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: {
          fareTable: fareTable
        }
      });
    }
  };
  var stops = {
    create: function create(_ref10) {
      var token = _ref10.token,
          jwtToken = _ref10.jwtToken,
          routeId = _ref10.routeId,
          stop = _ref10.stop,
          headers = _ref10.headers;

      return client({
        url: "/routes/" + routeId + "/stops",
        method: "post",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: stop
      });
    }
  };

  return {
    get: get,
    prices: prices,
    all: all,
    stations: stations,
    create: create,
    fareTables: fareTables,
    stops: stops
  };
}

module.exports = routesFactory;