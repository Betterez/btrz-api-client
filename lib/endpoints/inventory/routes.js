"use strict";

var _require = require("./../endpoints_helpers.js"),
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

  function update(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        data = _ref7.data,
        routeId = _ref7.routeId,
        headers = _ref7.headers;

    return client({
      url: "/routes/" + routeId,
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: data
    });
  }

  function remove(_ref8) {
    var token = _ref8.token,
        jwtToken = _ref8.jwtToken,
        routeId = _ref8.routeId,
        headers = _ref8.headers;

    return client({
      url: "/routes/" + routeId,
      method: "delete",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  var fareTables = {
    all: function all(_ref9) {
      var token = _ref9.token,
          _ref9$query = _ref9.query,
          query = _ref9$query === undefined ? {} : _ref9$query,
          headers = _ref9.headers;

      return client({
        url: "/routes/fare-tables",
        params: query,
        headers: authorizationHeaders({
          token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        })
      });
    },
    create: function create(_ref10) {
      var token = _ref10.token,
          jwtToken = _ref10.jwtToken,
          routeId = _ref10.routeId,
          fareTable = _ref10.fareTable,
          headers = _ref10.headers;

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
    update: function update(_ref11) {
      var token = _ref11.token,
          jwtToken = _ref11.jwtToken,
          routeId = _ref11.routeId,
          fareTableId = _ref11.fareTableId,
          fareTable = _ref11.fareTable,
          headers = _ref11.headers;

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
    create: function create(_ref12) {
      var token = _ref12.token,
          jwtToken = _ref12.jwtToken,
          routeId = _ref12.routeId,
          stop = _ref12.stop,
          headers = _ref12.headers;

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

  var fareRules = {
    get: function get(_ref13) {
      var token = _ref13.token,
          jwtToken = _ref13.jwtToken,
          routeId = _ref13.routeId,
          headers = _ref13.headers;

      return client({
        url: "/routes/" + routeId + "/fare-rules",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        })
      });
    },
    create: function create(_ref14) {
      var token = _ref14.token,
          jwtToken = _ref14.jwtToken,
          routeId = _ref14.routeId,
          fareRule = _ref14.fareRule,
          headers = _ref14.headers;

      return client({
        url: "/routes/" + routeId + "/fare-rules",
        method: "post",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: {
          fareRule: fareRule
        }
      });
    },
    update: function update(_ref15) {
      var token = _ref15.token,
          jwtToken = _ref15.jwtToken,
          routeId = _ref15.routeId,
          fareRuleId = _ref15.fareRuleId,
          fareRule = _ref15.fareRule,
          headers = _ref15.headers;

      return client({
        url: "/routes/" + routeId + "/fare-rules/" + fareRuleId,
        method: "put",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: {
          fareRule: fareRule
        }
      });
    },
    remove: function remove(_ref16) {
      var token = _ref16.token,
          jwtToken = _ref16.jwtToken,
          routeId = _ref16.routeId,
          fareRuleId = _ref16.fareRuleId,
          headers = _ref16.headers;

      return client({
        url: "/routes/" + routeId + "/fare-rules/" + fareRuleId,
        method: "delete",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        })
      });
    }
  };

  var priceBuckets = {
    get: function get(_ref17) {
      var token = _ref17.token,
          jwtToken = _ref17.jwtToken,
          routeId = _ref17.routeId,
          headers = _ref17.headers;

      return client({
        url: "/routes/" + routeId + "/price-buckets",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        })
      });
    },
    create: function create(_ref18) {
      var token = _ref18.token,
          jwtToken = _ref18.jwtToken,
          routeId = _ref18.routeId,
          bucket = _ref18.bucket,
          headers = _ref18.headers;

      return client({
        url: "/routes/" + routeId + "/price-buckets",
        method: "post",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: {
          bucket: bucket
        }
      });
    },
    update: function update(_ref19) {
      var token = _ref19.token,
          jwtToken = _ref19.jwtToken,
          routeId = _ref19.routeId,
          bucketId = _ref19.bucketId,
          bucket = _ref19.bucket,
          headers = _ref19.headers;

      return client({
        url: "/routes/" + routeId + "/price-buckets/" + bucketId,
        method: "put",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: {
          bucket: bucket
        }
      });
    },
    remove: function remove(_ref20) {
      var token = _ref20.token,
          jwtToken = _ref20.jwtToken,
          routeId = _ref20.routeId,
          bucketId = _ref20.bucketId,
          headers = _ref20.headers;

      return client({
        url: "/routes/" + routeId + "/price-buckets/" + bucketId,
        method: "delete",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        })
      });
    }
  };

  var crossBorderDistances = {
    get: function get(_ref21) {
      var token = _ref21.token,
          jwtToken = _ref21.jwtToken,
          routeId = _ref21.routeId,
          headers = _ref21.headers;

      return client({
        url: "/routes/" + routeId + "/cross-border-distances",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        })
      });
    },

    // eslint-disable-next-line no-shadow
    update: function update(_ref22) {
      var token = _ref22.token,
          jwtToken = _ref22.jwtToken,
          routeId = _ref22.routeId,
          crossBorderDistances = _ref22.crossBorderDistances,
          headers = _ref22.headers;

      return client({
        url: "/routes/" + routeId + "/cross-border-distances",
        method: "put",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: {
          crossBorderDistances: crossBorderDistances
        }
      });
    }
  };

  return {
    get: get,
    prices: prices,
    all: all,
    stations: stations,
    create: create,
    update: update,
    remove: remove,
    fareTables: fareTables,
    stops: stops,
    fareRules: fareRules,
    priceBuckets: priceBuckets,
    crossBorderDistances: crossBorderDistances
  };
}

module.exports = routesFactory;