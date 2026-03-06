/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} ManifestQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for manifests API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} manifest API methods
 */
function manifestFactory({
  client, internalAuthTokenProvider
}) {
  /**
   * POST /manifests/dispatch/reporting - create dispatch reporting.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @param {Object} opts.data - Request body
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function createDispatchReporting({token, jwtToken, headers, data}) {
    return client({
      url: "/manifests/dispatch/reporting",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * PUT manifests/:manifestId/dispatch/reporting - update dispatch reporting.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @param {string} opts.manifestId - Manifest id
   * @param {Object} opts.data - Request body
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function updateDispatchReporting({token, jwtToken, headers, manifestId, data}) {
    return client({
      url: `manifests/${manifestId}/dispatch/reporting`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * POST manifests/:manifestId/dispatches - dispatch manifest.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @param {string} opts.manifestId - Manifest id
   * @param {Object} opts.data - Request body
   * @param {ManifestQuery} [opts.query] - Query params
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function dispatch({token, jwtToken, headers, manifestId, data, query}) {
    return client({
      url: `manifests/${manifestId}/dispatches`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data,
      params: query
    });
  }

  /**
   * GET /manifests - list manifests.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ManifestQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /manifests/:manifestId - get manifest by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.manifestId - Manifest id
   * @param {ManifestQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getById({
    token, jwtToken, manifestId, query = {}, headers
  }) {
    return client({
      url: `/manifests/${manifestId}`,
      method: "get",
      params: query,
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  /**
   * PUT /manifests/status - bulk update manifest status.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function statusBulkUpdate({
    token, jwtToken, data, headers
  }) {
    return client({
      url: "/manifests/status",
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * POST /all-manifests - get all manifests (POST body for large query).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.providerId] - Provider id
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getAll({token, jwtToken, providerId, data, headers}) {
    // an HTTP POST request is used to send the query data in the request body because the query may be very large.
    return client({
      url: "/all-manifests",
      method: "post",
      params: {providerId},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * GET /outlook-manifests - outlook manifests.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ManifestQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function outlook({
    token, jwtToken, query = {}, headers
  }) {
    return client({
      url: "/outlook-manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  /**
   * PATCH /manifests - patch manifests.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ManifestQuery} [opts.query] - Query params
   * @param {Object} opts.operations - JSON Patch operations
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function patch({
    token, jwtToken, query = {}, operations, headers
  }) {
    return client({
      url: "/manifests",
      method: "patch",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        operations
      }
    });
  }

  /**
   * PUT /manifests - save manifest.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.providerId] - Provider id
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @param {ManifestQuery} [opts.query] - Query params
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function save({
    token, jwtToken, providerId, data, headers, query = {}
  }) {
    return client({
      url: "/manifests",
      method: "put",
      params: {providerId, manifestId: data.manifestId, ...query},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * POST /manifests/:manifestId/users - add user to manifest.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.manifestId - Manifest id
   * @param {ManifestQuery} [opts.query] - Query params
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function addUser({
    token, jwtToken, manifestId, query = {}, data, headers
  }) {
    return client({
      url: `/manifests/${manifestId}/users`,
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query,
      data
    });
  }

  /**
   * DELETE /manifests/:manifestId/users/:userId - remove user from manifest.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.manifestId - Manifest id
   * @param {string} opts.userId - User id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function removeUser({
    token, jwtToken, manifestId, userId, headers
  }) {
    return client({
      url: `/manifests/${manifestId}/users/${userId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  /**
   * POST /manifests/:manifestId/capacity-exceptions - add capacity exception.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.manifestId - Manifest id
   * @param {ManifestQuery} [opts.query] - Query params
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function addCapacityException({
    token, jwtToken, manifestId, query = {}, data, headers
  }) {
    return client({
      url: `/manifests/${manifestId}/capacity-exceptions`,
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query,
      data
    });
  }


  /**
   * DELETE /manifests/:manifestId/capacity-exceptions/:exceptionId - remove capacity exception.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.manifestId - Manifest id
   * @param {string} opts.exceptionId - Exception id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function removeCapacityException({
    token, jwtToken, manifestId, exceptionId, headers
  }) {
    return client({
      url: `/manifests/${manifestId}/capacity-exceptions/${exceptionId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  /**
   * PUT /manifests/:manifestId/comments - update comment.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.manifestId - Manifest id
   * @param {ManifestQuery} [opts.query] - Query params
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function updateComment({
    token, jwtToken, manifestId, query = {}, data, headers
  }) {
    return client({
      url: `/manifests/${manifestId}/comments`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query,
      data
    });
  }

  /**
   * PUT /manifests/:manifestId/status - update manifest status.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.manifestId - Manifest id
   * @param {ManifestQuery} [opts.query] - Query params
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function updateStatus({
    token, jwtToken, manifestId, query = {}, data, headers
  }) {
    return client({
      url: `/manifests/${manifestId}/status`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query,
      data
    });
  }

  /**
   * GET /manifests/:manifestKey/sales-authorizations - get sales authorizations.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.manifestKey - Manifest key
   * @param {ManifestQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getSalesAuthorizations({
    token, jwtToken, manifestKey, query = {}, headers
  }) {
    return client({
      url: `/manifests/${manifestKey}/sales-authorizations`,
      method: "get",
      params: query,
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  /** @type {{ create: function, open: function, close: function }} */
  const checkIn = {
    /**
     * POST /manifests/:manifestId/checkin/:legFromId - create check-in.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {ManifestQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @param {Object} opts.data - Request body
     * @param {string} opts.manifestId - Manifest id
     * @param {string} opts.legFromId - Leg from id
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({token, jwtToken, query = {}, headers, data, manifestId, legFromId}) {
      return client({
        url: `/manifests/${manifestId}/checkin/${legFromId}`,
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        params: query,
        data
      });
    },
    /**
     * PATCH /manifests/:manifestId/checkin/:legFromId (open_check_in) - open check-in.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {ManifestQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @param {string} opts.manifestId - Manifest id
     * @param {string} opts.legFromId - Leg from id
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    open({token, jwtToken, query = {}, headers, manifestId, legFromId}) {
      return client({
        url: `/manifests/${manifestId}/checkin/${legFromId}`,
        method: "patch",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        params: query,
        data: {
          operation: {
            name: "open_check_in"
          }
        }
      });
    },
    /**
     * PATCH /manifests/:manifestId/checkin/:legFromId (close_check_in) - close check-in.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {ManifestQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @param {string} opts.manifestId - Manifest id
     * @param {string} opts.legFromId - Leg from id
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    close({token, jwtToken, query = {}, headers, manifestId, legFromId}) {
      return client({
        url: `/manifests/${manifestId}/checkin/${legFromId}`,
        method: "patch",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        params: query,
        data: {
          operation: {
            name: "close_check_in"
          }
        }
      });
    }
  };

  /** @type {{ update: function, tickets: { update: function, noshow: function } }} */
  const legs = {
    /**
     * PUT /manifests/:manifestId/legs/:legFromId - update leg.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.data - Request body
     * @param {ManifestQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @param {string} opts.manifestId - Manifest id
     * @param {string} opts.legFromId - Leg from id
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update({token, jwtToken, data, query = {}, headers, manifestId, legFromId}) {
      return client({
        url: `/manifests/${manifestId}/legs/${legFromId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data
      });
    },
    tickets: {
      /**
       * PUT /manifests/:manifestId/legs/:legFromId/tickets/:ticketId - update leg ticket.
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {Object} opts.data - Request body
       * @param {ManifestQuery} [opts.query] - Query params
       * @param {Object} [opts.headers] - Optional headers
       * @param {string} opts.manifestId - Manifest id
       * @param {string} opts.legFromId - Leg from id
       * @param {string} opts.ticketId - Ticket id
       * @returns {Promise<import("axios").AxiosResponse>}
       */
      update({token, jwtToken, data, query = {}, headers, manifestId, legFromId, ticketId}) {
        return client({
          url: `/manifests/${manifestId}/legs/${legFromId}/tickets/${ticketId}`,
          method: "put",
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
          params: query,
          data
        });
      },
      /**
       * PUT /manifests/:manifestId/legs/:legFromId/tickets/:ticketId/noshow - mark ticket noshow.
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {ManifestQuery} [opts.query] - Query params
       * @param {Object} [opts.headers] - Optional headers
       * @param {string} opts.manifestId - Manifest id
       * @param {string} opts.legFromId - Leg from id
       * @param {string} opts.ticketId - Ticket id
       * @returns {Promise<import("axios").AxiosResponse>}
       */
      noshow({token, jwtToken, query = {}, headers, manifestId, legFromId, ticketId}) {
        return client({
          url: `/manifests/${manifestId}/legs/${legFromId}/tickets/${ticketId}/noshow`,
          method: "put",
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
          params: query
        });
      }
    }
  };

  const reports = {
    /**
     * GET /manifests/:id/reports - get manifest reports.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {ManifestQuery} [opts.query] - Query params
     * @param {string} [opts.responseType] - Response type (e.g. "json")
     * @param {string} opts.id - Manifest id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, query = {}, responseType = "json", id, headers}) {
      return client({
        url: `/manifests/${id}/reports`,
        method: "get",
        responseType,
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const labels = {
    /**
     * POST /manifests/:manifestId/labels - add label.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.manifestId - Manifest id
     * @param {ManifestQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @param {Object} opts.data - Request body
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    add({token, jwtToken, manifestId, query = {}, headers, data}) {
      return client({
        url: `/manifests/${manifestId}/labels`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data
      });
    },
    /**
     * DELETE /manifests/:manifestId/labels/:labelId - remove label.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.manifestId - Manifest id
     * @param {string} opts.labelId - Label id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    remove({token, jwtToken, manifestId, labelId, headers}) {
      return client({
        url: `/manifests/${manifestId}/labels/${labelId}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const tripClose = {
    /**
     * POST /manifests/:manifestId/trip-close - add trip close.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.manifestId - Manifest id
     * @param {ManifestQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    add({token, jwtToken, manifestId, query = {}, headers}) {
      return client({
        url: `/manifests/${manifestId}/trip-close`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query
      });
    }
  };

  const driverRelays = {
    /**
     * PUT /manifests/:manifestId/driver-relays - update driver relays.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.manifestId - Manifest id
     * @param {ManifestQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @param {Object} opts.data - Request body
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update({token, jwtToken, manifestId, query = {bypassValidation: false}, headers, data}) {
      return client({
        url: `/manifests/${manifestId}/driver-relays`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data
      });
    }
  };

  const manifestsExceptions = {
    /**
     * PUT /manifests/:manifestKey/manifests-exceptions - update manifest exceptions.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.manifestKey - Manifest key
     * @param {Object} opts.manifestException - Manifest exception payload
     * @param {Object} [opts.headers] - Optional headers
     * @param {ManifestQuery} [opts.query] - Query params
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update({token, jwtToken, manifestKey, manifestException, headers, query = {}}) {
      return client({
        url: `/manifests/${manifestKey}/manifests-exceptions`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: {manifestException}
      });
    }
  };

  return {
    get,
    getAll,
    getById,
    outlook,
    patch,
    save,
    addUser,
    removeUser,
    updateComment,
    updateStatus,
    addCapacityException,
    removeCapacityException,
    dispatch,
    updateDispatchReporting,
    createDispatchReporting,
    statusBulkUpdate,
    getSalesAuthorizations,
    manifestsExceptions,
    checkIn,
    legs,
    reports,
    labels,
    driverRelays,
    tripClose
  };
}

module.exports = manifestFactory;
