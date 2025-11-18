const {authorizationHeaders} = require("./../endpoints_helpers.js");

function routesFactory({client, internalAuthTokenProvider}) {
  function get({routeId, token, query = {}, headers}) {
    return client({
      url: `/route/${routeId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function prices({token, productId, originId, destinationId, channel, query, headers}) {
    const params = Object.assign({}, query, {productId, originId, destinationId, channel});

    return client({
      url: "/routes/prices",
      params,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function all({token, query = {}, headers}) {
    return client.get("/routes", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function stations({token, routeId, headers}) {
    return client({
      url: `/routes/${routeId}/stations`,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

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

  function remove({token, jwtToken, routeId, headers}) {
    return client({
      url: `/routes/${routeId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  const fareTables = {
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
  const stops = {
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

  const fareRules = {
    get({token, jwtToken, routeId, headers}) {
      return client({
        url: `/routes/${routeId}/fare-rules`,
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        })
      });
    },
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

  const priceBuckets = {
    get({token, jwtToken, routeId, headers}) {
      return client({
        url: `/routes/${routeId}/price-buckets`,
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        })
      });
    },
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

  const crossBorderDistances = {
    get({token, jwtToken, routeId, headers}) {
      return client({
        url: `/routes/${routeId}/cross-border-distances`,
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        })
      });
    },
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

  const prorationTables = {
    all({token, jwtToken, query = {}, headers}) {
      return client({
        url: "/routes/proration-tables",
        params: query,
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        })
      });
    },
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
