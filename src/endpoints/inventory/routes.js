/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for routes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, prices: function, all: function, stations: function, create: function, update: function, remove: function, fareTables: object, stops: object, fareRules: object, priceBuckets: object, crossBorderDistances: object, prorationTables: object }}
 */
function routesFactory({client, internalAuthTokenProvider}) {
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
  function get({routeId, token, query = {}, headers}) {
    return client({
      url: `/routes/${routeId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
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
  function prices({token, productId, originId, destinationId, channel, query, headers}) {
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
   * @param {Object} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client.get("/routes", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
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
  function stations({token, routeId, headers}) {
    return client({
      url: `/routes/${routeId}/stations`,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
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
  function create({token, jwtToken, data, headers}) {
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
   * PUT /routes/:routeId - update route.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {Object} opts.data - Route payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, data, routeId, headers}) {
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
   * DELETE /routes/:routeId - remove route.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({token, jwtToken, routeId, headers}) {
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
     * GET /routes/fare-tables - list fare tables.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all({
      token, query = {}, headers
    }) {
      return client({
        url: "/routes/fare-tables",
        params: query,
        headers: authorizationHeaders({
          token, internalAuthTokenProvider, headers
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
    create({
      token, jwtToken, routeId, fareTable, headers
    }) {
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
    update({
      token, jwtToken, routeId, fareTableId, fareTable, headers
    }) {
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
     * POST /routes/:routeId/stops - create stop.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} opts.stop - Stop payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({token, jwtToken, routeId, stop, headers}) {
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
     * GET /routes/:routeId/fare-rules - get fare rules.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, routeId, headers}) {
      return client({
        url: `/routes/${routeId}/fare-rules`,
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
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
    create({token, jwtToken, routeId, fareRule, headers}) {
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
    update({token, jwtToken, routeId, fareRuleId, fareRule, headers}) {
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
     * DELETE /routes/:routeId/fare-rules/:fareRuleId - remove fare rule.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {string} opts.fareRuleId - Fare rule id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    remove({token, jwtToken, routeId, fareRuleId, headers}) {
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
     * GET /routes/:routeId/price-buckets - get price buckets.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, routeId, headers}) {
      return client({
        url: `/routes/${routeId}/price-buckets`,
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
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
    create({token, jwtToken, routeId, bucket, headers}) {
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
    update({token, jwtToken, routeId, bucketId, bucket, headers}) {
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
     * DELETE /routes/:routeId/price-buckets/:bucketId - remove price bucket.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {string} opts.bucketId - Bucket id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    remove({token, jwtToken, routeId, bucketId, headers}) {
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
     * GET /routes/:routeId/cross-border-distances - get cross border distances.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, routeId, headers}) {
      return client({
        url: `/routes/${routeId}/cross-border-distances`,
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
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
    update({token, jwtToken, routeId, crossBorderDistances, headers}) {
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
     * @param {Object} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all({token, jwtToken, query = {}, headers}) {
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
     * @param {string} [opts.productId] - Product id (optional query)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    getByRouteId({token, jwtToken, routeId, productId, headers}) {
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
     * PUT /routes/:routeId/proration-tables - update proration table by route id.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {Object} opts.prorationTable - Proration table payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    updateByRouteId({token, jwtToken, routeId, prorationTable: prorationTableData, headers}) {
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
