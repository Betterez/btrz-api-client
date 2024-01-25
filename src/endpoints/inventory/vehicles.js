const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function vehiclesFactory({client, internalAuthTokenProvider}) {
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/vehicles", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({vehicleId, token, headers}) {
    return client.get(`/vehicles/${vehicleId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, vehicle, headers}) {
    return client({
      url: "/vehicles",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        vehicle
      }
    });
  }

  function remove({jwtToken, vehicleId, token, headers}) {
    return client({
      url: `/vehicles/${vehicleId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, vehicleId, vehicle, headers}) {
    return client({
      url: `/vehicles/${vehicleId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        vehicle
      }
    });
  }

  const seatmaps = {
    create({jwtToken, token, vehicleId, seatmap, headers, newdesign}) {
      return client({
        url: `/vehicles/${vehicleId}/seatmaps`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {
          seatmap,
          newdesign: newdesign || false
        }
      });
    },
    remove({jwtToken, vehicleId, seatMapId, token, headers, newdesign}) {
      return client({
        url: `/vehicles/${vehicleId}/seatmaps/${seatMapId}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {
          newdesign: newdesign || false
        }
      });
    }
  };

  return {
    all,
    get,
    create,
    update,
    remove,
    seatmaps
  };
}

module.exports = vehiclesFactory;
