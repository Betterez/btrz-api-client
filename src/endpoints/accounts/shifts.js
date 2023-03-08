const {authorizationHeaders} = require("./../endpoints_helpers.js");

function shiftsFactory({client, internalAuthTokenProvider}) {
  function all({jwtToken, token, query, headers}) {
    return client.get("/shifts", {
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query
    });
  }

  function get({token, userId, headers}) {
    return client.get(`/shift/user/${userId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, shiftData, headers}) {
    return client({
      url: "/shifts",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: shiftData
    });
  }

  function update({jwtToken, token, shiftId, operations, headers, query}) {
    return client({
      url: `/shifts/${shiftId}`,
      method: "patch",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        operations
      },
      params: query
    });
  }

  const locationClosureComments = {
    create({jwtToken, token, locationClosureId, locationClosureComment, headers}) {
      return client({
        url: `/shifts/location-closures/${locationClosureId}/comments`,
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: locationClosureComment
      });
    }
  };

  const locationClosures = {
    create({jwtToken, token, locationClosure, headers}) {
      return client({
        url: "/shifts/location-closures",
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: locationClosure
      });
    },
    all({jwtToken, token, query, headers}) {
      return client.get("/shifts/location-closures", {
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        params: query
      });
    },
    get({token, jwtToken, locationClosureId, headers}) {
      return client.get(`/shifts/location-closures/${locationClosureId}`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    comments: locationClosureComments
  };

  const payments = {
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/payments`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const transactions = {
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/transactions`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    all,
    get,
    create,
    update,
    payments,
    transactions,
    locationClosures
  };
}

module.exports = shiftsFactory;
