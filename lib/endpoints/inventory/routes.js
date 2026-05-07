

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /routes (btrz-api-inventory). See get-routes getSpec().
 * @typedef {Object} RoutesListQuery
 * @property {string} [disabled] - Get enabled or disabled routes [true, false]
 * @property {string} [productId] - Filter by product id (object id)
 * @property {string} [routeGTFSID] - Filter by route external ID (GTFS)
 * @property {string} [providerId] - Filter by provider
 * @property {string} [name] - Filter by exact name (case sensitive)
 * @property {string} [partialName] - Filter by partial name (case insensitive)
 * @property {number} [page] - Page for pagination
 * @property {boolean} [minimalPayload] - If true, schedules not included in response
 */

/**
 * Query params for GET /routes/proration-tables (btrz-api-inventory). See get-proration-tables getSpec().
 * @typedef {Object} RoutesProrationTablesListQuery
 * @property {string} [routeId] - Route id
 * @property {string} [providerId] - Provider id
 * @property {string} [productId] - Product id (journey pricing)
 */

/**
 * Factory for routes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, prices: function, all: function, stations: function, create: function, update: function, remove: function, fareTables: object, stops: object, fareRules: object, priceBuckets: object, crossBorderDistances: object, prorationTables: object }}
 */


function routesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /routes/:routeId - get route by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    const routeId = _ref2.routeId;
    const token = _ref2.token;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      url: `/routes/${routeId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /routes/prices - get route prices. Client merges productId, originId, destinationId, channel into query.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.productId - Product id (merged into query)
   * @param {string} opts.originId - Origin id (merged into query)
   * @param {string} opts.destinationId - Destination id (merged into query)
   * @param {string} opts.channel - Channel (merged into query)
   * @param {Object} [opts.query] - Additional query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function prices(_ref3) {
    const token = _ref3.token;
    const productId = _ref3.productId;
    const originId = _ref3.originId;
    const destinationId = _ref3.destinationId;
    const channel = _ref3.channel;
    const query = _ref3.query;
    const headers = _ref3.headers;

    const params = Object.assign({}, query, {productId, originId, destinationId, channel});

    return client({
      url: "/routes/prices",
      params,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /routes - list routes.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {RoutesListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref4) {
    const token = _ref4.token;
    const _ref4$query = _ref4.query;
    const query = _ref4$query === undefined ? {} : _ref4$query;
    const headers = _ref4.headers;

    return client.get("/routes", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /routes/:routeId/stations - get route stations. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function stations(_ref5) {
    const token = _ref5.token;
    const routeId = _ref5.routeId;
    const headers = _ref5.headers;

    return client({
      url: `/routes/${routeId}/stations`,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /routes - create route. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Route payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const data = _ref6.data;
    const headers = _ref6.headers;

    return client({
      url: "/routes",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data
    });
  }

  /**
   * PUT /routes/:routeId - update route. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {Object} opts.data - Route payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref7) {
    const token = _ref7.token;
    const jwtToken = _ref7.jwtToken;
    const data = _ref7.data;
    const routeId = _ref7.routeId;
    const headers = _ref7.headers;

    return client({
      url: `/routes/${routeId}`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data
    });
  }

  /**
   * DELETE /routes/:routeId - remove route. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref8) {
    const token = _ref8.token;
    const jwtToken = _ref8.jwtToken;
    const routeId = _ref8.routeId;
    const headers = _ref8.headers;

    return client({
      url: `/routes/${routeId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  /** @type {{ all: function, create: function, update: function }} */
  const fareTables = {
    /**
     * GET /routes/fare-tables - list fare tables. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all: function all(_ref9) {
      const token = _ref9.token;
      const _ref9$query = _ref9.query;
      const query = _ref9$query === undefined ? {} : _ref9$query;
      const headers = _ref9.headers;

      return client({
        url: "/routes/fare-tables",
        params: query,
        headers: authorizationHeaders({
          token, internalAuthTokenProvider, headers
        })
      });
    },

    /**
     * POST /routes/:routeId/fare-tables - create fare table. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} opts.fareTable - Fare table payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref10) {
      const token = _ref10.token;
      const jwtToken = _ref10.jwtToken;
      const routeId = _ref10.routeId;
      const fareTable = _ref10.fareTable;
      const headers = _ref10.headers;

      return client({
        url: `/routes/${routeId}/fare-tables`,
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          fareTable
        }
      });
    },

    /**
     * PUT /routes/:routeId/fare-tables/:fareTableId - update fare table. API does not accept query params.
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
      const token = _ref11.token;
      const jwtToken = _ref11.jwtToken;
      const routeId = _ref11.routeId;
      const fareTableId = _ref11.fareTableId;
      const fareTable = _ref11.fareTable;
      const headers = _ref11.headers;

      return client({
        url: `/routes/${routeId}/fare-tables/${fareTableId}`,
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          fareTable
        }
      });
    }
  };
  /** @type {{ create: function }} */
  const stops = {
    /**
     * POST /routes/:routeId/stops - create stop. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} opts.stop - Stop payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref12) {
      const token = _ref12.token;
      const jwtToken = _ref12.jwtToken;
      const routeId = _ref12.routeId;
      const stop = _ref12.stop;
      const headers = _ref12.headers;

      return client({
        url: `/routes/${routeId}/stops`,
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: stop
      });
    }
  };

  /** @type {{ get: function, create: function, update: function, remove: function }} */
  const fareRules = {
    /**
     * GET /routes/:routeId/fare-rules - get fare rules. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref13) {
      const token = _ref13.token;
      const jwtToken = _ref13.jwtToken;
      const routeId = _ref13.routeId;
      const headers = _ref13.headers;

      return client({
        url: `/routes/${routeId}/fare-rules`,
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        })
      });
    },

    /**
     * POST /routes/:routeId/fare-rules - create fare rule. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} opts.fareRule - Fare rule payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref14) {
      const token = _ref14.token;
      const jwtToken = _ref14.jwtToken;
      const routeId = _ref14.routeId;
      const fareRule = _ref14.fareRule;
      const headers = _ref14.headers;

      return client({
        url: `/routes/${routeId}/fare-rules`,
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          fareRule
        }
      });
    },

    /**
     * PUT /routes/:routeId/fare-rules/:fareRuleId - update fare rule. API does not accept query params.
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
      const token = _ref15.token;
      const jwtToken = _ref15.jwtToken;
      const routeId = _ref15.routeId;
      const fareRuleId = _ref15.fareRuleId;
      const fareRule = _ref15.fareRule;
      const headers = _ref15.headers;

      return client({
        url: `/routes/${routeId}/fare-rules/${fareRuleId}`,
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          fareRule
        }
      });
    },

    /**
     * DELETE /routes/:routeId/fare-rules/:fareRuleId - remove fare rule. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {string} opts.fareRuleId - Fare rule id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    remove: function remove(_ref16) {
      const token = _ref16.token;
      const jwtToken = _ref16.jwtToken;
      const routeId = _ref16.routeId;
      const fareRuleId = _ref16.fareRuleId;
      const headers = _ref16.headers;

      return client({
        url: `/routes/${routeId}/fare-rules/${fareRuleId}`,
        method: "delete",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        })
      });
    }
  };

  /** @type {{ get: function, create: function, update: function, remove: function }} */
  const priceBuckets = {
    /**
     * GET /routes/:routeId/price-buckets - get price buckets. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref17) {
      const token = _ref17.token;
      const jwtToken = _ref17.jwtToken;
      const routeId = _ref17.routeId;
      const headers = _ref17.headers;

      return client({
        url: `/routes/${routeId}/price-buckets`,
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        })
      });
    },

    /**
     * POST /routes/:routeId/price-buckets - create price bucket. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} opts.bucket - Bucket payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref18) {
      const token = _ref18.token;
      const jwtToken = _ref18.jwtToken;
      const routeId = _ref18.routeId;
      const bucket = _ref18.bucket;
      const headers = _ref18.headers;

      return client({
        url: `/routes/${routeId}/price-buckets`,
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          bucket
        }
      });
    },

    /**
     * PUT /routes/:routeId/price-buckets/:bucketId - update price bucket. API does not accept query params.
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
      const token = _ref19.token;
      const jwtToken = _ref19.jwtToken;
      const routeId = _ref19.routeId;
      const bucketId = _ref19.bucketId;
      const bucket = _ref19.bucket;
      const headers = _ref19.headers;

      return client({
        url: `/routes/${routeId}/price-buckets/${bucketId}`,
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          bucket
        }
      });
    },

    /**
     * DELETE /routes/:routeId/price-buckets/:bucketId - remove price bucket. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {string} opts.bucketId - Bucket id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    remove: function remove(_ref20) {
      const token = _ref20.token;
      const jwtToken = _ref20.jwtToken;
      const routeId = _ref20.routeId;
      const bucketId = _ref20.bucketId;
      const headers = _ref20.headers;

      return client({
        url: `/routes/${routeId}/price-buckets/${bucketId}`,
        method: "delete",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        })
      });
    }
  };

  /** @type {{ get: function, update: function }} */
  const crossBorderDistances = {
    /**
     * GET /routes/:routeId/cross-border-distances - get cross border distances. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref21) {
      const token = _ref21.token;
      const jwtToken = _ref21.jwtToken;
      const routeId = _ref21.routeId;
      const headers = _ref21.headers;

      return client({
        url: `/routes/${routeId}/cross-border-distances`,
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        })
      });
    },

    /**
     * PUT /routes/:routeId/cross-border-distances - update cross border distances. API does not accept query params.
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
      const token = _ref22.token;
      const jwtToken = _ref22.jwtToken;
      const routeId = _ref22.routeId;
      const crossBorderDistances = _ref22.crossBorderDistances;
      const headers = _ref22.headers;

      return client({
        url: `/routes/${routeId}/cross-border-distances`,
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          crossBorderDistances
        }
      });
    }
  };

  /** @type {{ all: function, getByRouteId: function, updateByRouteId: function }} */
  const prorationTables = {
    /**
     * GET /routes/proration-tables - list proration tables.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {RoutesProrationTablesListQuery} [opts.query] - Query params (routeId, providerId, productId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all: function all(_ref23) {
      const token = _ref23.token;
      const jwtToken = _ref23.jwtToken;
      const _ref23$query = _ref23.query;
      const query = _ref23$query === undefined ? {} : _ref23$query;
      const headers = _ref23.headers;

      return client({
        url: "/routes/proration-tables",
        params: query,
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        })
      });
    },

    /**
     * GET /routes/:routeId/proration-tables - get proration tables by route id.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {string} [opts.productId] - Product id (optional query; filters by product)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    getByRouteId: function getByRouteId(_ref24) {
      const token = _ref24.token;
      const jwtToken = _ref24.jwtToken;
      const routeId = _ref24.routeId;
      const productId = _ref24.productId;
      const headers = _ref24.headers;

      const query = productId ? {productId} : {};
      return client({
        url: `/routes/${routeId}/proration-tables`,
        params: query,
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        })
      });
    },

    /**
     * PUT /routes/:routeId/proration-tables - update proration table by route id. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} opts.prorationTable - Proration table payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    updateByRouteId: function updateByRouteId(_ref25) {
      const token = _ref25.token;
      const jwtToken = _ref25.jwtToken;
      const routeId = _ref25.routeId;
      const prorationTableData = _ref25.prorationTable;
      const headers = _ref25.headers;

      return client({
        url: `/routes/${routeId}/proration-tables`,
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          prorationTable: prorationTableData
        }
      });
    }
  };

  return {
    get,
    prices,
    all,
    stations,
    create,
    update,
    remove,
    fareTables,
    stops,
    fareRules,
    priceBuckets,
    crossBorderDistances,
    prorationTables
  };
}

module.exports = routesFactory;
