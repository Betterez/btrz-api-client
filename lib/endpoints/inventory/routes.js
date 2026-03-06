"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for routes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, prices: function, all: function, stations: function, create: function, update: function, remove: function, fareTables: object, stops: object, fareRules: object, priceBuckets: object, crossBorderDistances: object, prorationTables: object }}
 */


function routesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /routes/:routeId - get route by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {Object} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    var routeId = _ref2.routeId,
        token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/routes/" + routeId,
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /routes/prices - get route prices.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.productId - Product id
   * @param {string} opts.originId - Origin id
   * @param {string} opts.destinationId - Destination id
   * @param {string} opts.channel - Channel
   * @param {Object} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
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

  /**
   * GET /routes - list routes.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
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

  /**
   * GET /routes/:routeId/stations - get route stations.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function stations(_ref5) {
    var token = _ref5.token,
        routeId = _ref5.routeId,
        headers = _ref5.headers;

    return client({
      url: "/routes/" + routeId + "/stations",
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /routes - create route.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Route payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
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

  /**
   * PUT /routes/:routeId - update route.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {Object} opts.data - Route payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
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

  /**
   * DELETE /routes/:routeId - remove route.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
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

  /** @type {{ all: function, create: function, update: function }} */
  var fareTables = {
    /**
     * GET /routes/fare-tables - list fare tables.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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

    /**
     * POST /routes/:routeId/fare-tables - create fare table.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} opts.fareTable - Fare table payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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

    /**
     * PUT /routes/:routeId/fare-tables/:fareTableId - update fare table.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {string} opts.fareTableId - Fare table id
     * @param {Object} opts.fareTable - Fare table payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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
  /** @type {{ create: function }} */
  var stops = {
    /**
     * POST /routes/:routeId/stops - create stop.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} opts.stop - Stop payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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

  /** @type {{ get: function, create: function, update: function, remove: function }} */
  var fareRules = {
    /**
     * GET /routes/:routeId/fare-rules - get fare rules.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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

    /**
     * POST /routes/:routeId/fare-rules - create fare rule.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} opts.fareRule - Fare rule payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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

    /**
     * PUT /routes/:routeId/fare-rules/:fareRuleId - update fare rule.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {string} opts.fareRuleId - Fare rule id
     * @param {Object} opts.fareRule - Fare rule payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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

    /**
     * DELETE /routes/:routeId/fare-rules/:fareRuleId - remove fare rule.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {string} opts.fareRuleId - Fare rule id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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

  /** @type {{ get: function, create: function, update: function, remove: function }} */
  var priceBuckets = {
    /**
     * GET /routes/:routeId/price-buckets - get price buckets.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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

    /**
     * POST /routes/:routeId/price-buckets - create price bucket.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} opts.bucket - Bucket payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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

    /**
     * PUT /routes/:routeId/price-buckets/:bucketId - update price bucket.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {string} opts.bucketId - Bucket id
     * @param {Object} opts.bucket - Bucket payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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

    /**
     * DELETE /routes/:routeId/price-buckets/:bucketId - remove price bucket.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {string} opts.bucketId - Bucket id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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

  /** @type {{ get: function, update: function }} */
  var crossBorderDistances = {
    /**
     * GET /routes/:routeId/cross-border-distances - get cross border distances.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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

    /**
     * PUT /routes/:routeId/cross-border-distances - update cross border distances.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} opts.crossBorderDistances - Cross border distances payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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

  /** @type {{ all: function, getByRouteId: function, updateByRouteId: function }} */
  var prorationTables = {
    /**
     * GET /routes/proration-tables - list proration tables.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all: function all(_ref23) {
      var token = _ref23.token,
          jwtToken = _ref23.jwtToken,
          _ref23$query = _ref23.query,
          query = _ref23$query === undefined ? {} : _ref23$query,
          headers = _ref23.headers;

      return client({
        url: "/routes/proration-tables",
        params: query,
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        })
      });
    },

    /**
     * GET /routes/:routeId/proration-tables - get proration tables by route id.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {string} [opts.productId] - Product id (optional query)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    getByRouteId: function getByRouteId(_ref24) {
      var token = _ref24.token,
          jwtToken = _ref24.jwtToken,
          routeId = _ref24.routeId,
          productId = _ref24.productId,
          headers = _ref24.headers;

      var query = productId ? { productId: productId } : {};
      return client({
        url: "/routes/" + routeId + "/proration-tables",
        params: query,
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        })
      });
    },

    /**
     * PUT /routes/:routeId/proration-tables - update proration table by route id.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} opts.prorationTable - Proration table payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    updateByRouteId: function updateByRouteId(_ref25) {
      var token = _ref25.token,
          jwtToken = _ref25.jwtToken,
          routeId = _ref25.routeId,
          prorationTableData = _ref25.prorationTable,
          headers = _ref25.headers;

      return client({
        url: "/routes/" + routeId + "/proration-tables",
        method: "put",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: {
          prorationTable: prorationTableData
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
    crossBorderDistances: crossBorderDistances,
    prorationTables: prorationTables
  };
}

module.exports = routesFactory;