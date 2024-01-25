const {authorizationHeaders} = require("./../endpoints_helpers");

function schedulesFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}, headers}) {
    return client.get("/routes/schedules", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({token, routeId, scheduleId, headers}) {
    return client.get(`/routes/${routeId}/schedules/${scheduleId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({token, jwtToken, data, routeId, headers}) {
    return client({
      url: `/routes/${routeId}/schedules`,
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data
    });
  }

  function update({token, jwtToken, data, routeId, scheduleId, headers}) {
    return client({
      url: `/routes/${routeId}/schedules/${scheduleId}`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data
    });
  }

  function deleteSchedule({token, jwtToken, routeId, scheduleId, headers}) {
    return client({
      url: `/routes/${routeId}/schedules/${scheduleId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  const autoBouncing = {
    create: ({token, jwtToken, data, headers}) => {
      return client({
        url: "/routes/schedules/auto-bouncing",
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data
      });
    },
    delete: ({token, jwtToken, parentScheduleId, headers}) => {
      return client({
        url: `/routes/schedules/${parentScheduleId}/auto-bouncing`,
        method: "delete",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        })
      });
    }
  };

  return {
    all,
    get,
    create,
    update,
    delete: deleteSchedule,
    autoBouncing
  };
}

module.exports = schedulesFactory;
