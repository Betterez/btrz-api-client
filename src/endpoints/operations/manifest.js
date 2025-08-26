const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function manifestFactory({
  client, internalAuthTokenProvider
}) {
  function createDispatchReporting({token, jwtToken, headers, data}) {
    return client({
      url: "/manifests/dispatch/reporting",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function updateDispatchReporting({token, jwtToken, headers, manifestId, data}) {
    return client({
      url: `manifests/${manifestId}/dispatch/reporting`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function dispatch({token, jwtToken, headers, manifestId, data, query}) {
    return client({
      url: `manifests/${manifestId}/dispatches`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data,
      params: query
    });
  }

  function get({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

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

  function save({
    token, jwtToken, providerId, data, headers
  }) {
    return client({
      url: "/manifests",
      method: "put",
      params: {providerId, manifestId: data.manifestId},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

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

  const checkIn = {
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

  const legs = {
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
      update({token, jwtToken, data, query = {}, headers, manifestId, legFromId, ticketId}) {
        return client({
          url: `/manifests/${manifestId}/legs/${legFromId}/tickets/${ticketId}`,
          method: "put",
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
          params: query,
          data
        });
      },
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
    add({token, jwtToken, manifestId, query = {}, headers, data}) {
      return client({
        url: `/manifests/${manifestId}/labels`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data
      });
    },
    remove({token, jwtToken, manifestId, labelId, headers}) {
      return client({
        url: `/manifests/${manifestId}/labels/${labelId}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const tripClose = {
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
    checkIn,
    legs,
    reports,
    labels,
    driverRelays,
    tripClose
  };
}

module.exports = manifestFactory;
